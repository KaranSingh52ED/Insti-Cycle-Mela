const asyncHandler = require("express-async-handler");
const Bicycle = require("../models/Bicycle");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");

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
  const images = files.map((file) => {
    const filename = uuidv4() + "-" + file.originalname;
    const filepath = path.join(__dirname, "../uploads", filename);
    fs.renameSync(file.path, filepath);
    return filename;
  });
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
  try {
    await bicycle.save();
    res.status(201).send({ message: "Bicycle has been created successfully" });
  } catch (error) {
    res.status(400).send({ message: "Error creating bicycle", error });
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
  const images = files.map((file) => {
    const filename = uuidv4() + "-" + file.originalname;
    const filepath = path.join(__dirname, "../uploads", filename);
    fs.renameSync(file.path, filepath);
    return filename;
  });
  const bicycle = await Bicycle.findByIdAndUpdate(
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
      images,
    },
    { new: true }
  ).exec();
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

//for test purpose:
exports.addBicycles = async (req, res) => {
  try {
    const bicycles = req.body;
    if (!Array.isArray(bicycles)) {
      return res
        .status(400)
        .send("Request body should be an array of bicycles");
    }

    const result = await Bicycle.insertMany(bicycles);
    res.status(201).send(result);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};
exports.getImages = async (req, res) => {
  try {
    const id = req.params.id;
    const bicycle = await Bicycle.findById(id).exec();
    if (!bicycle) {
      return res.status(404).send({ message: "Bicycle not found" });
    }
    const images = bicycle.images;
    const imagePath = path.join(__dirname, "../uploads");

    // Check if images exist on the file system
    const existingImages = images.filter((image) =>
      fs.existsSync(path.join(imagePath, image))
    );

    // Return the full path to the images
    const imageUrls = existingImages.map(
      (image) => `${req.protocol}://${req.get("host")}/uploads/${image}`
    );

    res.json(imageUrls);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error retrieving images" });
  }
};
