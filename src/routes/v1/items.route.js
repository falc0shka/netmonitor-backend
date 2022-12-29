const express = require('express');
const itemsController = require('../../controllers/items.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router
  .route('/')
  .get(auth('getHosts'), itemsController.getItems)
  .post(auth('getHosts'), itemsController.createItem)
  .put(auth('getHosts'), itemsController.updateItem)

router
  .route('/:_id')
  .get(auth('getHosts'), itemsController.getItemsByHostId)
  .delete(auth('getHosts'), itemsController.deleteItem)

module.exports = router;