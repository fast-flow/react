import { Component } from "react"
import {{ componentname name }} from "../index"
import { shallow, mount, render } from "enzyme"

it('className', function () {
    const app = mount(<{{ componentname name }} className="myclass" />)
    expect(app.find('.myclass').length).toEqual(1)
})
