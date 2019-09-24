function createExtractRequestParams (lib, mylib) {
  'use strict';

  function extractRequestParams (req) {
    if (!req) {
      return q.reject(new lib.Error('NO_REQUEST_PROVIDED', 'A Request object was not provided to extractRequestParams'));
    }
    switch (req.method) {
      case 'GET':
        return q(mylib.readRequestQuery(req));
      case 'PUT':
      case 'POST':
        return mylib.readRequestBody(req);
      default:
        return q.reject(new lib.Error('UNSUPPORTED_REQUEST_METHOD', 'Request method `'+req.method+'` is not supported'));
    }
  }

  mylib.extractRequestParams = extractRequestParams;
}

module.exports = createExtractRequestParams;
