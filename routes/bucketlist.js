'use strict'

const express = require('express');
const BucketListController = require('../controller/bucketlist');
const api = express.Router();

api.get('/', BucketListController.getList)
api.post('/', BucketListController.getList)
api.delete('/:id',BucketListController.getList);

module.exports = api;