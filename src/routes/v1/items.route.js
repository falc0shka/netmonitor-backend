const express = require('express');
const itemsController = require('../../controllers/items.controller');

const router = express.Router();

router
  .route('/')
  .get(itemsController.getItems)
  .post(itemsController.createItem)
  .put(itemsController.updateItem)

router
  .route('/:_id')
  .get(itemsController.getItemsByHostId)
  .delete(itemsController.deleteItem)

module.exports = router;