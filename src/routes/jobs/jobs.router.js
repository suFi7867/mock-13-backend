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
  console.log(req.body)
  try {

    let exists = await Jobs.findOneAndDelete({
      id: +req.body.id,
    });
    
    console.log(exists,typeof +req.body.id, req.body.name);

    res.status(200).send("Product deleted successfully");
  } catch (e) {
    res.send(e.massage);
  }
});



module.exports = app;
