var express = require('express');
var router = express.Router();
const Entry = require('../models/Entry');
const getLicensePlateNumberOcr = require('../services/api/ocr');

router.post('/', async function(req, res, next) {
  const imagePath = req.body.imagePath;
  const licensePlateNumber = await getLicensePlateNumberOcr(imagePath);
  const entry = new Entry(licensePlateNumber,false, new Date().toLocaleString(),"");
  entry.checkVerification();
  await entry.saveToDB();
  res.send("Vehicle may enter :"+entry.isVerified);
});

module.exports = router;
