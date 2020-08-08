import { Icon } from "../index"
import React from "react"
import renderer from "react-test-renderer";
describe('Icon', () => {
    it('renders an `.code-ui-svg` component', () => {
        const json = renderer.create(<Icon name="main" />)
        expect(json).toMatchSnapshot()
    })
})