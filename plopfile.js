const viewGenerator = require('./example/prompt.js')
// const componentGenerator = require('./plop-templates/component/prompt')
// const storeGenerator = require('./plop-templates/store/prompt.js')

module.exports = function(plop) {
  plop.setGenerator('view', viewGenerator)
  // plop.setGenerator('component', componentGenerator)
  // plop.setGenerator('store', storeGenerator)
}
