/*!
 * RedJMQ
 * Copyright(c) 2017-2018 Jinbel
 */

'use strict';

/**
 *Module dependencies.
 *@private
 */
var Promise = require('bluebird');

/**
 *Client prototype
 */
var client = exports = module.exports = {};

/**
 *list left push values
 *
 *@param key 'list key'
 *@param values 'values wanted to push'
 *@return promise
 */
client.lpush = function (key, values) {
  var src = this.src;

  var op = new Promise(function (resolve, reject) {
    src.lpush(key, values, function (err, res) {
      if (err) {
        reject(err);
        return;
      }
        resolve(res);
    });
  });

  return op;
}

/**
 *list right push values
 *
 *@param key 'list key'
 *@param values 'values wanted to push'
 *@return promise
 */
client.rpush = function (key, values) {
  var src = this.src;

  var op = new Promise(function (resolve, reject) {
    src.rpush(key, values, function (err, res) {
      if (err) {
        reject(err);
        return;
      }
      resolve(res);
    });
  });

  return op;
}

/**
 *list left pop value
 *
 *@param key 'list key'
 *@return promise resolve the value
 */
client.lpop = function (key) {
  var src = this.src;

  var op = new Promise(function (resolve, reject) {
    src.lpop(key, function (err, res) {
      if (err) {
        reject(err);
        return;
      }

      resolve(res);
    });
  });

  return op;
}

/**
 *list right pop value
 *
 *@param key 'list key'
 *@return promise resolve the value
 */
client.rpop = function (key) {
  var src = this.src;

  var op = new Promise(function (resolve, reject) {
    src.rpop(key, function (err, res) {
      if (err) {
        reject(err);
        return;
      }

      resolve(res);
    });
  });

  return op;
}
