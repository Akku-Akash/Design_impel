const express = require("express");
const router = express.Router();
const Brand = require("../models/brand.model");

router.get("", async (req, res) => {
  try {
    const items = await Brand.find().lean().exec();
    res.status(200).send(items);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
router.get("/brands", async (req, res, next) => {
  try {
    var allBrands = await Brand.distinct("brand");
    res.status(200).json({ allBrands });
  } catch (error) {
    next(error);
  }
});

router.get("/category", async (req, res, next) => {
  try {
    var categories = await Brand.distinct("category");
    res.status(200).json({ categories });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const items = await Brand.findById(req.params.id).lean().exec();
    res.status(200).send(items);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post("", async (req, res) => {
  try {
    const items = await Brand.create(req.body);
    res.status(200).send(items);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const items = await Brand.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    res.status(200).send(items);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const items = await Brand.findByIdAndDelete(req.params.id).lean().exec();
    res.status(200).send(items);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
