const mongoose = require('mongoose');
//const validator = require('validator');
//const bcrypt = require('bcryptjs');
//const { toJSON, paginate } = require('./plugins');
//const { roles } = require('../config/roles');

const itemsSchema = mongoose.Schema(
  {
    _id: {type: mongoose.Types.ObjectId, auto: true, alias: 'itemId'},
    itemHost: {type: mongoose.Types.ObjectId, required: true},
    itemStatus: {type: String, required: true, default: 'false',},
    itemType: {type: String, required: true},
    itemTarget: {type: String, required: true},
    itemGraph: {
      type: [Number],
      required: true,
      default: [1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1],
    },
  },
);

const Items = mongoose.model('Items', itemsSchema);

module.exports = Items;
