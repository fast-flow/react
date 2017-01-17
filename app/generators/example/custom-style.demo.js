var React = require('react')
var Alert = require('../lib/index.js').default
var App = React.createClass({
    render: function () {
        return (
            <Alert className="alert--info" >basic</Alert>
        )
    }
})
module.exports = App
