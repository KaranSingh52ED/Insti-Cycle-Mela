const asyncHandler = require("express-async-handler");
const Bicycle = require("../models/Bicycle");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

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
  const images = files.map((file) => file.path);
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
    res.status(201).send({ message: "Bicycle created successfully" });
  } catch (error) {
    res.status(400).send({ message: "Error creating bicycle", error });
  }
});

exports.getBicycles = asyncHandler(async (req, res, next) => {
  const bicycles = await Bicycle.find().exec();
  res.send(bicycles);
});

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
  const images = files.map((file) => file.path);
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
