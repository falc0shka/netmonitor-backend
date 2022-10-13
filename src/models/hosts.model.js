const mongoose = require('mongoose');
//const validator = require('validator');
//const bcrypt = require('bcryptjs');
//const { toJSON, paginate } = require('./plugins');
//const { roles } = require('../config/roles');

const hostsSchema = mongoose.Schema(
  {
    _id: {type: mongoose.Types.ObjectId, auto: true, alias: 'hostId'},
    hostName: {type: String, required: true, unique: true},
    hostFqdn: {type: String, default: '',},
    hostIp: {type: String, default: '', required: true},
    hostStatus: {type: String, default: 'true',},
    hostService: {type: String, default: ''},
    hostCluster: {type: String, default: ''},
    hostNote: {type: String, default: '',},
    hostItems: {
      type: [mongoose.Types.ObjectId],
      default: [],
    },
  },
);

const Hosts = mongoose.model('Hosts', hostsSchema);

module.exports = Hosts;
