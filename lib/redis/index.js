/*!
 * RedJMQ
 * Copyright(c) 2017-2018 Jinbel
 */

'use strict';

/**
 *Module dependencies.
 */

var client = require('redis');
var _ = require('lodash');
var mixin = require('merge-descriptors');
var proto = require('./client');

/**
 * Export 'createClient()'
 */

module.exports = createClient;

/**
 *Default redis options
 */

var defaultOptions = {
  host: '127.0.0.1',
  port: '6379',
};

/**
 *redis client
 */
var redisClient = null;

/**
 *Create a redis client
 *
 *@return [object]
 *@api public
 */

function createClient(options) {
  if (redisClient) {
    return redisClient;
  }

  options = options || defaultOptions;

  redisClient = {
    src: client.createClient(options),
  };

  mixin(redisClient, proto);

  return redisClient;
}
