import React from 'react';
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";
import { Input } from '@com/index';
import { UserIcon, PasswordIcon } from '@com/Icon';
describe('<Input/>', () => {
    describe("type", () => {
        it('renders an `type=text` component', () => {
            const json = renderer.create(<Input placeholder="text" />)
            expect(json).toMatchSnapshot()
        })
        it('renders an `type=password` component', () => {
            const json = renderer.create(<Input type="password" placeholder="password" />)
            expect(json).toMatchSnapshot()
        })
        it('renders an `type=number` component', () => {
            const json = renderer.create(<Input type="number" placeholder="number" />)
            expect(json).toMatchSnapshot()
        })
    })
    describe('event', () => {
        it('should handle onChange Event', () => {
            const fn = jest.fn();
            const wrapper = shallow(<Input onChange={fn} />);
            wrapper.find('.code-ui-input-inputLabel').simulate('change', {
                target: {
                    value: 'change'
                }
            })
            expect(fn).toHaveBeenCalled();
            expect(fn).toBeCalledWith({
                target: {
                    value: 'change'
                }
            });
        })
        it('should handle onFocus Event', () => {
            const fn = jest.fn();
            const wrapper = shallow(<Input onFocus={fn} />);
            wrapper.find('.code-ui-input-inputLabel').simulate('focus')
            expect(fn).toHaveBeenCalled();
        })
        it('should handle onBlur Event', () => {
            const fn = jest.fn();
            const wrapper = shallow(<Input onBlur={fn} />);
            wrapper.find('.code-ui-input-inputLabel').simulate('blur')
            expect(fn).toHaveBeenCalled();
        })
    })
    describe('iconFix', () => {
        const userIcon = <UserIcon />
        const passwordIcon = <PasswordIcon />
        it('renders an `preIconFix` component ', () => {
            const json = renderer.create(<Input placeholder="前置Icon" preIconFix={userIcon} />)
            expect(json).toMatchSnapshot()
        })
        it('renders an `sufIconFix` component ', () => {
            const json = renderer.create(<Input placeholder="后置Icon" sufIconFix={passwordIcon} />)
            expect(json).toMatchSnapshot()
        })
        it('renders an `preIconFix and sufIconFix` component ', () => {
            const json = renderer.create(<Input placeholder="前/后置Icon" preIconFix={userIcon} sufIconFix={passwordIcon} />)
            expect(json).toMatchSnapshot()
        })
    })
    describe('strFix', () => {
        it('renders an `preStrFix` component ', () => {
            const json = renderer.create(<Input placeholder="baidu.com" preStrFix='http://' />)
            expect(json).toMatchSnapshot()
        })
        it('renders an `sufStrFix` component ', () => {
            const json = renderer.create(<Input placeholder="http://baidu" sufStrFix='.com' />)
            expect(json).toMatchSnapshot()
        })
        it('renders an `preStrFix and sufStrFix` component ', () => {
            const json = renderer.create(<Input placeholder="baidu" preStrFix='http://' sufStrFix='.com' />)
            expect(json).toMatchSnapshot()
        })
    })
    describe('status', () => {
        const userIcon = <UserIcon />
        const passwordIcon = <PasswordIcon />
        describe('render', () => {
            describe('strFix Error', () => {
                it('renders an `preStrFix Error` component ', () => {
                    const json = renderer.create(<Input placeholder="固定文字块 Error" preStrFix='http://' error />)
                    expect(json).toMatchSnapshot()
                })
                it('renders an `sufStrFix Error` component ', () => {
                    const json = renderer.create(<Input placeholder="http://baidu" sufStrFix='.com' error />)
                    expect(json).toMatchSnapshot()
                })
                it('renders an `preStrFix and sufStrFix Error` component ', () => {
                    const json = renderer.create(<Input placeholder="baidu" preStrFix='http://' sufStrFix='.com' error />)
                    expect(json).toMatchSnapshot()
                })
            })
            describe('strFix Disabled', () => {
                it('renders an `preStrFix Disabled` component ', () => {
                    const json = renderer.create(<Input placeholder="固定文字块 Error" preStrFix='http://' disabled />)
                    expect(json).toMatchSnapshot()
                })
                it('renders an `sufStrFix Disabled` component ', () => {
                    const json = renderer.create(<Input placeholder="http://baidu" sufStrFix='.com' disabled />)
                    expect(json).toMatchSnapshot()
                })
                it('renders an `preStrFix and sufStrFix Disabled` component ', () => {
                    const json = renderer.create(<Input placeholder="baidu" preStrFix='http://' sufStrFix='.com' disabled />)
                    expect(json).toMatchSnapshot()
                })
            })
            describe('iconFix Error', () => {
                it('renders an `preIconFix Error` component ', () => {
                    const json = renderer.create(<Input placeholder="前置Icon" preIconFix={userIcon} error />)
                    expect(json).toMatchSnapshot()
                })
                it('renders an `sufIconFix Error` component ', () => {
                    const json = renderer.create(<Input placeholder="后置Icon" sufIconFix={passwordIcon} error />)
                    expect(json).toMatchSnapshot()
                })
                it('renders an `preIconFix and sufIconFix Error` component ', () => {
                    const json = renderer.create(<Input placeholder="前/后置Icon" preIconFix={userIcon} sufIconFix={passwordIcon} error />)
                    expect(json).toMatchSnapshot()
                })
            })
            describe('iconFix Disabled', () => {
                it('renders an `preIconFix Disabled` component ', () => {
                    const json = renderer.create(<Input placeholder="前置Icon" preIconFix={userIcon} disabled />)
                    expect(json).toMatchSnapshot()
                })
                it('renders an `sufIconFix Disabled` component ', () => {
                    const json = renderer.create(<Input placeholder="后置Icon" sufIconFix={passwordIcon} disabled />)
                    expect(json).toMatchSnapshot()
                })
                it('renders an `preIconFix and sufIconFix Disabled` component ', () => {
                    const json = renderer.create(<Input placeholder="前/后置Icon" preIconFix={userIcon} sufIconFix={passwordIcon} disabled />)
                    expect(json).toMatchSnapshot()
                })
            })
        })

    })
})