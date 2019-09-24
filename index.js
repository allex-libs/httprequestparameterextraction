function createLib (execlib) {
  'use strict';
  var ret = {};
  require('./readrequestquerycreator.js')(execlib.lib, ret);
  require('./readrequestbodycreator.js')(execlib.lib, ret);
  require('./extractrequestparamscreator.js')(execlib.lib, ret);
  return ret;
}

module.exports = createLib;
