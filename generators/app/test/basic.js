// scryRenderedDOMComponentsWithClass ：找出所有匹配指定className的节点
// findRenderedDOMComponentWithClass ：与scryRenderedDOMComponentsWithClass用法相同，但只返回一个节点，如有零个或多个匹配的节点就报错
// scryRenderedDOMComponentsWithTag ：找出所有匹配指定标签的节点
// findRenderedDOMComponentWithTag ：与scryRenderedDOMComponentsWithTag用法相同，但只返回一个节点，如有零个或多个匹配的节点就报错
// scryRenderedComponentsWithType ：找出所有符合指定子组件的节点
// findRenderedComponentWithType ：与scryRenderedComponentsWithType用法相同，但只返回一个节点，如有零个或多个匹配的节点就报错
// findAllInRenderedTree：遍历当前组件所有的节点，只返回那些符合条件的节点

import TestUtils from 'react-addons-test-utils'
import expect from "expect.js"

var React = require('react')
var Alert = require('../lib/index.js').default
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

const app = TestUtils.renderIntoDocument(<App/>);
expect(TestUtils.scryRenderedDOMComponentsWithClass(app, 'r-alert').length).to.eql(1)
TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithClass(app, 'r-alert-close'))
expect(TestUtils.scryRenderedDOMComponentsWithClass(app, 'r-alert').length).to.eql(0)
console.info('basic.js test done')
