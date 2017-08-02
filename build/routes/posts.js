'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var express = require('express');

var router = express.Router();

router.get('/', function (req, res) {
    res.send('posts');
});

router.get('/read/:id', function (req, res) {
    res.send('You are reading post ' + req.params.id);
});

exports.default = router;