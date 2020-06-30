var express = require('express');
var router = express.Router();
const Decision = require('../models/Decision');
const getLicensePlateNumberOcr = require('../services/api/ocr');

router.post('/', async function(req, res, next) {
  const imagePath = req.body.imagePath;
  const licensePlateNumber = await getLicensePlateNumberOcr(imagePath);
  const decision = new Decision(licensePlateNumber,false, new Date().toLocaleString(),"");
  decision.checkVerification();
  await decision.saveToDB();
  res.send("Vehicle is verified: "+decision.isVerified);
});

module.exports = router;
