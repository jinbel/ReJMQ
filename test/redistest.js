'use strict';

var createMQ = require('../ReJMQ');
var mq = createMQ({ host: '10.3.242.231', port: '6379' });

mq.produce('test1', 'asdfas')
  .then(function (res) {
    console.log('produce result: ' + res);
    return mq.produce('test1', 'fdasdf');
  })
  .then (function (res) {
    console.log('produce result: ' + res);
    return mq.consume('test1');
  })
  .then(function (res) {
    console.log('consume: ' + res);
    return mq.consume('test1');
  })
  .then(function (res) {
    console.log('consume: ' + res);
  })
  .catch(function (err) {
    console.log(err);
  });
