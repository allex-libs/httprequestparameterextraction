var Url = require('url');

function createReadRequestQuery (lib, mylib) {
  'use strict';

  function readRequestQuery (req) {
    return Url.parse(req, true).query;
  }

  mylib.readRequestQuery = readRequestQuery;
}

module.exports = createReadRequestQuery;
