# ReJMQ
### useage
var createMQ = require('rejmq');
var mq = createMQ({ host: 'host', port: 'port' });
mq.produce(key, val)
.then(function (res) {
  return mq.consume(key);    
})
.then(function (res) {
  console.log(res);
  return;    
})
.catch(function (err) {
  console.log(err);    
}) 
