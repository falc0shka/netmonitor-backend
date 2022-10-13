//const httpStatus = require('http-status');
const { Items } = require('../models');
const { Hosts } = require('../models');
//const ApiError = require('../utils/ApiError');


const getItems = async () => {
  return Items.find()
};

const getItemsByHostId = async (hostId) => {
  return Items.find({ itemHost: hostId })
};

const createItem = async (itemData) => {
  const item = await Items.create({...itemData})
  console.log(item)
  const host = await Hosts.findByIdAndUpdate(
    item.itemHost, 
    {
      $push: {
        hostItems: item._id
      }
    },
    {
      safe: true,
      new: true
    }
  )
  console.log(host)
  // await hostsService.updateHost(req.body.itemHost, {
  //   $push: {hostItems: item._id}
  // })
  return item
};
const updateItem = async (itemId, itemData) => {
  return Items.findByIdAndUpdate(itemId, itemData, {new: true})
};

const deleteItem = async (itemId) => {
  const item = await Items.findByIdAndDelete(itemId)

  const host = await Hosts.findByIdAndUpdate(
    item.itemHost, 
    {
      $pull: {
        hostItems: item._id
      }
    },
    {
      safe: true,
      new: true
    }
  )
  console.log(host)
  return item
};

module.exports = {
  getItems,
  getItemsByHostId,
  createItem,
  updateItem,
  deleteItem,
};
