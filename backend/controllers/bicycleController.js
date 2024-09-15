const asyncHandler = require("express-async-handler");
const Bicycle = require("../models/Bicycle");
const { v4: uuidv4 } = require("uuid");
const cloudinary = require("cloudinary").v2;

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.createBicycle = asyncHandler(async (req, res, next) => {
  const {
    name,
    email,
    phoneNumber,
    gender,
    title,
    description,
    price,
    condition,
  } = req.body;

  const files = req.files;
  let images = [];

  try {
    // Upload each image to Cloudinary
    for (const file of files) {
      const result = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          {
            folder: "bicycles",
            resource_type: "image",
            public_id: uuidv4(),
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        ).end(file.buffer);
      });
      images.push(result.secure_url); // Store the Cloudinary URL
    }

    const bicycle = new Bicycle({
      name,
      email,
      phoneNumber,
      gender,
      title,
      description,
      price,
      condition,
      images,
    });

    await bicycle.save();
    res.status(201).send({ message: "Bicycle has been created successfully" });
  } catch (error) {
    res.status(400).send({ message: "Error creating bicycle", error });
  }
});

exports.updateBicycle = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const {
    name,
    email,
    phoneNumber,
    gender,
    title,
    description,
    price,
    condition,
  } = req.body;
  const files = req.files;
  let images = [];

  try {
    if (files && files.length > 0) {
      // Upload new images to Cloudinary
      for (const file of files) {
        const result = await new Promise((resolve, reject) => {
          cloudinary.uploader.upload_stream(
            {
              folder: "bicycles",
              resource_type: "image",
              public_id: uuidv4(),
            },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          ).end(file.buffer);
        });
        images.push(result.secure_url);
      }
    }

    const updatedBicycle = await Bicycle.findByIdAndUpdate(
      id,
      {
        name,
        email,
        phoneNumber,
        gender,
        title,
        description,
        price,
        condition,
        images: images.length > 0 ? images : undefined, // Update images only if new ones are uploaded
      },
      { new: true }
    ).exec();

    if (!updatedBicycle) {
      res.status(404).send({ message: "Bicycle not found" });
    } else {
      res.send(updatedBicycle);
    }
  } catch (error) {
    res.status(400).send({ message: "Error updating bicycle", error });
  }
});

exports.getBicycles = async (req, res) => {
  const {
    category,
    minPrice,
    maxPrice,
    condition,
    location,
    sortBy,
    page = 1,
    limit = 10,
  } = req.query;
  const filter = {};

  if (category) filter.category = category;
  if (minPrice) filter.price = { ...filter.price, $gte: minPrice };
  if (maxPrice) filter.price = { ...filter.price, $lte: maxPrice };
  if (condition) filter.condition = condition;
  if (location) filter.location = location;

  const sortOptions = {};
  if (sortBy) {
    const [field, order] = sortBy.split(":");
    sortOptions[field] = order === "desc" ? -1 : 1;
  }

  try {
    const bicycles = await Bicycle.find(filter)
      .sort(sortOptions)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Bicycle.countDocuments(filter);
    res.json({ bicycles, total });
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

exports.getBicycle = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const bicycle = await Bicycle.findById(id).exec();
  if (!bicycle) {
    res.status(404).send({ message: "Bicycle not found" });
  } else {
    res.send(bicycle);
  }
});

exports.deleteBicycle = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  await Bicycle.findByIdAndRemove(id).exec();
  res.send({ message: "Bicycle deleted successfully" });
});

// For testing purposes:
exports.addBicycles = async (req, res) => {
  try {
    const bicycles = req.body;
    if (!Array.isArray(bicycles)) {
      return res.status(400).send("Request body should be an array of bicycles");
    }

    const result = await Bicycle.insertMany(bicycles);
    res.status(201).send(result);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};
