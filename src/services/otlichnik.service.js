//const httpStatus = require('http-status');
//const { Items } = require('../models');
//const { Hosts } = require('../models');
//const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const url = require('url');
const axios = require('axios');
//import axios from 'axios'


const yooMoney = catchAsync(async (req, res) => {
  console.log(req.body)
  
  const params = new url.URLSearchParams(req.body);
  console.log(params.toString())
  const result = (await axios.post('https://yoomoney.ru/eshop.xml', params.toString(), {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
  }))
  //this.hosts = (await axios.get(`:/v1/hosts`)).data
  //const items = await itemsService.getItems()
  //console.log(result)
  res.json(result.request.res.responseUrl)
});

module.exports = {
  yooMoney,
};
