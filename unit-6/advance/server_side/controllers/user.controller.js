const router = require('express').Router();
const User = require("../models/user.model");

router.get("", async (req, res) => {
  try {
    const users = await User.find().populate("addresses").exec();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const users = await User.findById(req.params.id).lean().exec();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
router.get("/:id/addresses", async (req, res) => {
  try {
    const users = await User.findById(req.params.id).lean().exec();
    res.status(200).send({"addresses" :users.addresses});
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post("/create", async (req, res) => {
  try {
    const users = await User.create(req.body);
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
router.patch("/:id/addresses/create", async (req, res) => {
  // console.log("****")
  try {
    const users = await User.findByIdAndUpdate({_id: req.params.id},{$set :{addresses : req.body}});
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
router.get("/:id/addresses", async (req, res) => {
  try {
    const users = await User.find({_id : req.params.id});
    res.status(200).send(users.addressses);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
// router.patch("/:id/addresses/idx/edit", async (req, res) => {
//   try {
//     // let newAdd = addresses.req.params.idx;
//     const users = await User.find({_id : req.params.id});
//     console.log(users);
//     // const users = await User.findAndUpdate({_id:req.params.id},{$set : {newAdd : req.body}});
//     res.status(200).send(users);
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });

router.patch("/:id", async (req, res) => {
  try {
    const users = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const users = await User.findByIdAndDelete(req.params.id).lean().exec();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
