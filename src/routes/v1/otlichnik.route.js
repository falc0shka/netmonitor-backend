const express = require('express');
const otlichnickService = require('../../services/otlichnik.service');

const router = express.Router();

router
  .route('/')
  .post(otlichnickService.yooMoney)

module.exports = router;