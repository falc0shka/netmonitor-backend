const express = require('express');
const auth = require('../../middlewares/auth');

const hostsController = require('../../controllers/hosts.controller');

const router = express.Router();

router
  .route('/')
  .get(auth('getHosts'), hostsController.getHosts)
  .post(auth('getHosts'), hostsController.createHost)
  .put(auth('getHosts'), hostsController.updateHost)

router
  .route('/:_id')
  .get(auth('getHosts'), hostsController.getHostById)
  .delete(auth('getHosts'), hostsController.deleteHost)

module.exports = router;