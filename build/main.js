'use strict';

var _posts = require('./routes/posts');

var _posts2 = _interopRequireDefault(_posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');

var app = express();

var port = 3000;

// 경로 '/' 로 들어오는 요청들은 public 폴더로 정적 라우팅합니다.
app.use('/', express.static(__dirname + '/../public'));

app.get('/hello', function (req, res) {
    return res.send('Can you hear me?');
});

// 라우트 예제입니다.

app.use('/posts', _posts2.default);

var server = app.listen(port, function () {
    console.log('Express listening on port', port);
});