const express = require("express");
const Person = require("../models/person");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const people = await Person.find();
    res.json(people);
  } catch (err) {
    res.send("error" + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    res.json(person);
  } catch (err) {
    res.send("error" + err);
  }
});

router.post("/", async (req, res) => {
  const person = new Person({
    name: req.body.name,
    interests: req.body.interests,
    age: req.body.age,
  });
  try {
    const a1 = await person.save();
    res.json(a1);
  } catch (err) {
    res.send("error" + err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    person.age = req.body.age;
    const a1 = await person.save();
    res.json(a1);
  } catch (err) {
    res.send("error" + err);
  }
});

router.delete("/:id", async (req, res) => {
  console.log("deleting...");
  try {
    const success = await Person.findByIdAndDelete(req.params.id, function (
      err
    ) {
      if (err) console.log(err);
      console.log("Successful deletion");
    });
    res.send("deleted person with id : " + req.params.id);
  } catch (err) {
    res.send("error" + err);
  }
});
module.exports = router;
