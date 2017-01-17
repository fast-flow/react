var React = require('react')
var Alert = require('name').default
var App = React.createClass({
    getInitialState() {
        return {
            show: true
        }
    },
    render: function () {
        var self = this
        return (
            <div>
                {
                    self.state.show?
                    (
                        <Alert onClose={function() {
                                self.setState({
                                    show: false
                                })
                            }} >basic</Alert>
                    ):null
                }
            </div>
        )
    }
})
module.exports = App
