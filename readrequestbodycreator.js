function createReadRequestBody (lib, mylib) {
  'use strict';

  var q = lib.q;


  function readRequestBody (req) {
    var defer = q.defer();
    var body = '';
    function ender () {
      detacher();
      //console.log('request body', body);
      try {
        body = JSON.parse(body);
      } catch(ignore) {}
      defer.resolve(body);
      body = null;
      defer = null;
    }
    function errorer (err) {
      detacher();
      defer.reject(err);
      defer = null;
      body = null;
    }
    function dataer (chunk) {
      body += chunk.toString('utf8');
    }
    function detacher () {
      req.removeListener('end', ender);
      req.removeListener('error', errorer);
      req.removeListener('data', dataer);
    }
    req.on('end', ender);
    req.on('error', errorer);
    req.on('data', dataer);
    return defer.promise;
  };

  mylib.readRequestBody = readRequestBody;
}

module.exports = createReadRequestBody;
