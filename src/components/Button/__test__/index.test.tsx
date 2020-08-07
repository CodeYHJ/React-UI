import { shallow, mount, render } from 'enzyme';
import renderer from "react-test-renderer"
import Button from '../index'
import React from 'react'

describe('<Button/>',()=>{
    it('must be render Button Component',()=>{
        const json = renderer.create(<Button />).toJSON()
        expect(json).toMatchSnapshot()
    })
})