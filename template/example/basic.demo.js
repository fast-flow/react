var React = require('react')
var {{ componentname name }} = require('{{ name }}').default
var App = React.createClass({
    getInitialState: function () {
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
                        <{{ componentname name }} onClose={function() {
                                self.setState({
                                    show: false
                                })
                            }} >basic</{{ componentname name }}>
                    ):null
                }
            </div>
        )
    }
})
module.exports = App
