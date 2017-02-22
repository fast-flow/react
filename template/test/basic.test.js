import { Component } from "react"
import {{ componentname name }} from "../lib/index"
import Test from 'react-addons-test-utils'

it('className', function () {
    var app = Test.renderIntoDocument(<{{ componentname name }} className="myclass" />)
    expect(Test.scryRenderedDOMComponentsWithClass(app, 'myclass').length)
        .toEqual(1)
})
