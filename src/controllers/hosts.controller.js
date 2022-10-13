//const httpStatus = require('http-status');
//const pick = require('../utils/pick');
//const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { hostsService } = require('../services');


const getHosts = catchAsync(async (req, res) => {
  const hosts = await hostsService.getHosts()
  res.json(hosts)
});

const getHostById = catchAsync(async (req, res) => {
  const host = await hostsService.getHostById(req.params._id)
  res.json(host)
});

const createHost = catchAsync(async (req, res) => {
  const host = await hostsService.createHost(req.body)
  res.json(host)
});

const updateHost = catchAsync(async (req, res) => {
  const host = await hostsService.updateHost(req.body._id, req.body)
  res.json(host)
});

const deleteHost = catchAsync(async (req, res) => {
  const host = await hostsService.deleteHost(req.params._id)
  res.json(host)
});

module.exports = {
  getHosts,
  getHostById,
  createHost,
  updateHost,
  deleteHost,
};
