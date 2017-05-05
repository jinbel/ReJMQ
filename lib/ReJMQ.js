/*!
 * RedJMQ
 * Copyright(c) 2017-2018 Jinbel
 */

'use strict';

/**
 *Module dependencies
 *@private.
 */
var mq = exports = module.exports = {};

/**
 *Produce a message
 *
 *@param key 'list key'
 *@param values 'values wanted to push'
 *@return promise
 */

mq.produce = function (key, value) {
  var redisClient = this.redisClient;
  return redisClient.rpush(key, value);
}

/**
 *Consume a message
 *
 *@param key 'list key'
 *@param values 'values wanted to push'
 *@return promise
 */

mq.consume = function (key) {
  var redisClient = this.redisClient;
  return redisClient.lpop(key);
}


