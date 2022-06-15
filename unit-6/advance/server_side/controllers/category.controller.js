const express = require("express");
const router = express.Router();
const Category = require("../models/category.model");

router.get("", async (req, res) => {
  try {
    const items = await Category.find().lean().exec();
    res.status(200).send(items);
  } catch (err) {
    res.status(500).send(err.message);
  }
});


router.get("/category", async (req, res, next) => {
  try {
    var categories = await Category.distinct("category");
    res.status(200).json({ categories });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const items = await Category.findById(req.params.id).lean().exec();
    res.status(200).send(items);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
const buildAncestors = async ( id,parent_id ) => {
  let ancest = [];
  try {
    let cat = await Category.find({_id : parent_id});
    if(cat){
      ancest = [...cat.ancestors];
      const category = await Category.findByIdAndUpdate(id,  { $set: { "ancestors": ancest } });

    }
  } catch (error) {
    console.log(err.message)
  }

}

router.post("", async (req, res) => {
  let parent = req.body.parent ? req.body.parent : null;
  let category = new Category({name : req.body.name ,parent});
  try {
    let newcat = await category.save();
    buildAncestors(newcat._id,parent);
    res.status(200).send(newcat);
  } catch (err) {
    res.status(500).send(err.message);
  }
});



module.exports = router;
