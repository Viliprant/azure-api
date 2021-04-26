const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const ConstructionModel = require('../Schemas/construction');

const mongoDB = process.env.MONGO_URL_PROD;

console.log("mongodbstring: ", mongoDB);

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

router.get('/', function(req, res) {
  res.send('Home page : Construction');
});

router.get('/id/:id', async (req, res, next) => {
  const construction = await ConstructionModel.findOne({
    "ID": req.params.id
  });

  if(!construction){
    return next("ID not found");
  }
  
  return res.json(construction);
});

router.get('/country/:country', async (req, res, next) => {
  const country = req.params.country.split("_").join(" ");

  const construction = await ConstructionModel.find({
    "Région": country
  });

  if(!construction){
    return next("ID not found");
  }
  
  return res.json(construction);
});

router.get('/type/:type', async (req, res, next) => {
  const type = req.params.type.split("_").join(" ");

  const construction = await ConstructionModel.find({
    "Type": type
  });

  if(!construction){
    return next("ID not found");
  }
  
  return res.json(construction);
});

router.get('/function/:function', async (req, res, next) => {
  const functionConstruction = req.params.function.split("_").join(" ");

  const construction = await ConstructionModel.find({
    "Fonction": functionConstruction
  });

  if(!construction){
    return next("ID not found");
  }
  
  return res.json(construction);
});

router.get('/dept/:dept', async (req, res, next) => {
  const dept = req.params.dept.split("_").join(" ");

  const construction = await ConstructionModel.find({
    "Dept": dept
  });

  if(!construction){
    return next("ID not found");
  }
  
  return res.json(construction);
});

router.get('/zip-code/:zipcode', async (req, res, next) => {
  const construction = await ConstructionModel.find({
    "Code Postal": req.params.zipcode
  });

  if(!construction){
    return next("ID not found");
  }
  
  return res.json(construction);
});

router.use((err, req, res, next) => {
  res.status(400);

  return res.send(`Error 400 : Bad Resquest (${err})`)
})

module.exports = router;