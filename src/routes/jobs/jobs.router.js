require("dotenv").config();

const { Router } = require("express");

const Jobs = require("./jobs.model");

const app = Router();


app.get("/", async (req, res) => {

  try {
    let data = await Jobs.find();
    return res.status(200).send(data);
  } catch (er) {
    return res.status(404).send(er.message);
  }
});


// Delete 

app.delete("/", async (req, res) => {

  try {

    let exists = await Jobs.findOneAndDelete({
      _id: req.body.id,
    });
    
    console.log(exists,typeof +req.body.id);

    res.status(200).send("Product deleted successfully");

  } catch (e) {
    res.send(e.massage);
  }
});


app.post("/", async (req, res) => {
  const {
    name,
    location, 
    contract,
    jobrole
  } = req.body;

  try {

    const job = await Jobs({
      name,
      location,
      contract,
      jobrole
    });

    await job.save();
    return res
    .status(200)
    .send({ message: "Product Added successfully"});
    
    
  } catch (e) {
    res.send(e.massage);
  }
});



module.exports = app;
