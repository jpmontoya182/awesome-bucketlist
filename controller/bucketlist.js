'use strict'
const BucketList = require('../models/list');

function getList(req, res){
    return res.status(200).send({message : 'ok'})
}

module.exports = {
    getList
};