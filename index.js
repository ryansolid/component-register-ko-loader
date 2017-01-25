var preprocessor = require('component-register-ko/lib/preprocessor/index.js')

module.exports = function (content) {
  this.cacheable && this.cacheable()
  var transformed = preprocessor(content);
  return "module.exports=" + JSON.stringify(transformed);
}
