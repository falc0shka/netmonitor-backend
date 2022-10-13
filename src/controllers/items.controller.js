//const httpStatus = require('http-status');
//const pick = require('../utils/pick');
//const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { itemsService } = require('../services');

const getItems = catchAsync(async (req, res) => {
  const items = await itemsService.getItems()
  res.json(items)
});

const getItemsByHostId = catchAsync(async (req, res) => {
  const items = await itemsService.getItemsByHostId(req.params._id)
  res.json(items)
});

const createItem = catchAsync(async (req, res) => {
  const item = await itemsService.createItem(req.body)
  res.json(item)
});

const updateItem = catchAsync(async (req, res) => {
  const item = await itemsService.updateItem(req.body._id, req.body)
  res.json(item)
});

const deleteItem = catchAsync(async (req, res) => {
  const item = await itemsService.deleteItem(req.params._id)
  res.json(item)
});

module.exports = {
  getItems,
  getItemsByHostId,
  createItem,
  updateItem,
  deleteItem,
};
