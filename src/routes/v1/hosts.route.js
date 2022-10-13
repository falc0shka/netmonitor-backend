const express = require('express');
const hostsController = require('../../controllers/hosts.controller');

const router = express.Router();

router
  .route('/')
  .get(hostsController.getHosts)
  .post(hostsController.createHost)
  .put(hostsController.updateHost)

router
  .route('/:_id')
  .get(hostsController.getHostById)
  .delete(hostsController.deleteHost)

module.exports = router;