//const httpStatus = require('http-status');
const { Hosts } = require('../models');
const { Items } = require('../models');

//const ApiError = require('../utils/ApiError');


const getHosts = async () => {
  return Hosts.find()
};

const getHostById = async (hostId) => {
  return Hosts.findByIdAndUpdate(hostId)
};

const createHost = async (hostData) => {
  //const {hostName, hostFqdn, hostIp, hostNote, hostStatus} = hostData
  return Hosts.create({...hostData}) //hostName, hostFqdn, hostIp, hostNote, hostStatus})

};
const updateHost = async (hostId, hostData) => {
  return Hosts.findByIdAndUpdate(hostId, hostData, {new: true})
};

const deleteHost = async (hostId) => {
  const host = await Hosts.findByIdAndDelete(hostId)
  const items = await Items.deleteMany({itemHost: hostId})
  console.log('Items deleted ', items)
  return host
};

module.exports = {
  getHosts,
  getHostById,
  createHost,
  updateHost,
  deleteHost,
};
