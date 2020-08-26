import React from 'react';
import { classPre } from "../../util/index"
import ExampleBox from '../../component/ExampleBox';
import ExampleApi from '../../component/ExampleApi';
import "./index.less";
import { Input,Icon } from "@codeyhj/react-ui";

export interface InputExampleProps {

}
const c = classPre('input')

const InputExample: React.SFC<InputExampleProps> = () => {
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value, '值改变')
    }

    const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        console.log('聚焦')
    }

    const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        console.log('失焦')
    }
    const userIcon = <Icon name="user" />
    const passwordIcon = <Icon name="password" />
    const handleData = [
        { name: 'type', dsc: 'input的类型', type: ['text', 'password', 'number'], value: 'text' },
        { name: 'value', dsc: 'input的当前值', type: ['string'], value: '--' },
        { name: 'defaultValue', dsc: 'input默认值', type: ['string'], value: '--' },
        { name: 'placeholder', dsc: 'input原生属性', type: ['string'], value: '--' },
        { name: 'error', dsc: 'input的Error', type: ['boolean'], value: 'false' },
        { name: 'disabled', dsc: 'input是否失效', type: ['boolean'], value: 'false' },
        { name: 'onChange', dsc: '值改变的回调', type: ['（event：React.ChangeEvent<HTMLInputElement>) => void'], value: '--' },
        { name: 'onFocus', dsc: 'inpuit聚焦的回调', type: ['（event：React.FocusEvent<HTMLInputElement>) => void'], value: '--' },
        { name: 'onBlur', dsc: 'inpuit失去焦点的回调', type: ['（event：React.FocusEvent<HTMLInputElement>) => void'], value: '--' },
        { name: 'preIconFix', dsc: '前置Icon', type: ['ReactNode'], value: '--' },
        { name: 'sufIconFix', dsc: '后置Icon', type: ['ReactNode'], value: '--' },
        { name: 'preStrFix', dsc: '前置固定文字块', type: ['ReactNode'], value: '--' },
        { name: 'sufStrFix', dsc: '后置固定文字块', type: ['ReactNode'], value: '--' },


        { name: 'className', dsc: '容器className', type: ['string'], value: '--' },
        { name: 'style', dsc: '指定样式', type: ['CSSProperties'], value: '--' },
    ]
    return (
        <div className={c()}>
            <section>
                <h1 className={c('title')}>Input输入框</h1>
                <p className={c('p')}>用户输入内容</p>
            </section>
            <section>
                <h2 className={c('title')}>代码示例</h2>
                <ExampleBox title="基本使用" description="基本使用，支持type：text、password、number，并提供onChange、onFocues、onBlur等方法"
                    code={require('!!raw-loader!./code/baseCode.tsx')}>
                    <div>
                        <Input placeholder="基本使用" onChange={handleOnChange} onFocus={handleOnFocus} onBlur={handleOnBlur} />
                    </div>
                    <br />
                    <div>
                        <Input placeholder="password" type="password" onChange={handleOnChange} onFocus={handleOnFocus} onBlur={handleOnBlur} />
                    </div>
                    <br />
                    <div>
                        <Input placeholder="number" type="number" onChange={handleOnChange} onFocus={handleOnFocus} onBlur={handleOnBlur} />
                    </div>
                </ExampleBox>
                <ExampleBox title="前/后置Icon" description="input 前/后置Icon,可根据业务自行插入Icon"
                    code={require('!!raw-loader!./code/iconFix.tsx')}>
                    <div>
                        <Input placeholder="前置Icon" preIconFix={userIcon} />
                    </div>
                    <br />
                    <div>
                        <Input placeholder="后置Icon" sufIconFix={passwordIcon} />
                    </div>
                    <br />
                    <div>
                        <Input placeholder="前/后置Icon" preIconFix={userIcon} sufIconFix={passwordIcon} />
                    </div>
                </ExampleBox>
                <ExampleBox title="前/后置固定文字块" description="input 前/后置固定文字块,可根据业务自行设置固定文字块"
                    code={require('!!raw-loader!./code/strFix.tsx')}>
                    <div>
                        <Input placeholder="baidu.com" preStrFix='http://' />
                    </div>
                    <br />
                    <div>
                        <Input placeholder="http://baidu" sufStrFix='.com' />
                    </div>
                    <br />
                    <div>
                        <Input placeholder="baidu" preStrFix='http://' sufStrFix='.com' />
                    </div>
                </ExampleBox>
                <ExampleBox title="状态" description="状态有：Error、Disabled"
                    code={require('!!raw-loader!./code/status.tsx')}>
                    <div>
                        <Input placeholder="固定文字块 Error" preStrFix='http://' error />
                    </div>
                    <br />
                    <div>
                        <Input placeholder="固定文字块 Disabled" sufStrFix='.com' disabled />
                    </div>
                    <br />
                    <div>
                        <Input placeholder="前置Icon Error" preIconFix={userIcon} error />
                    </div>
                    <br />
                    <div>
                        <Input placeholder="前置Icon disabled" preIconFix={userIcon} disabled />
                    </div>
                </ExampleBox>
                <ExampleApi data={handleData} />
            </section>
        </div>
    );
}

export default InputExample;