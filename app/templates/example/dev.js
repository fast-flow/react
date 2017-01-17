var ReactDOM = require('react-dom')
var render = ReactDOM.render

// test_node
;(function(node) {
    if (!node) {return}
    require(['../test/index.js'], function (Demo) {
        console.log('require test/index.js')
        Demo = Demo.default || Demo
        render(<Demo />, node)
    })
})(document.getElementById('test_node'))

// basic
;(function (node) {
    if (!node) {return}
    require(['./basic.demo.js'], function (Demo) {
        Demo = Demo.default || Demo
        render(<Demo />, node)
    })
})(document.getElementById('example__basic_node'))

// custom-style
;(function (node) {
    if (!node) {return}
    require(['./custom-style.demo.js'], function (Demo) {
        Demo = Demo.default || Demo
        render(<Demo />, node)
    })
})(document.getElementById('example__custom-style_node'))
