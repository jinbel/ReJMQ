/*!
 * RedJMQ
 * Copyright(c) 2017-2018 Jinbel
 */

'use strict';

/**
 *Module dependencies.
 */

var redis = require('./lib/redis');
var _ = require('lodash');
var mixin = require('merge-descriptors');
var proto = require('./lib/ReJMQ');

/**
 *rejmq
 */

var mq = null;

/**
 *create a rejmq
 *
 *@return [object]
 *@api public
 */

function createMQ(options) {
  if (mq) {
    return mq;
  }

  mq = {
    redisClient: redis(options),
  };

  mixin(mq, proto);

  return mq;
}


/**
 * Export 'createMQ()'
 */

module.exports = createMQ;
