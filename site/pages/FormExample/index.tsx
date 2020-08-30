import React, { useState, ChangeEvent, useContext } from 'react';
import { classPre } from "../../util/index"
import ExampleBox from '../../component/ExampleBox';
import ExampleApi from '../../component/ExampleApi';
import "./index.less";
import { Button, Icon, Input, Form } from "../../../dist";

export interface FormExampleProps {

}

const c = classPre('form')

const FormExample: React.SFC<FormExampleProps> = () => {
    const passwordIcon = <Icon name="password" />
    const userIcon = <Icon name="user" />

    const [userValue, setUserValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')

    const handleUserChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserValue(e.target.value)
    }
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.target.value)
    }
    const forRef = Form.userForm()
    return (
        <div className={c()}>
            <section>
                <h1 className={c('title')}>Form</h1>
                <p className={c('p')}>Form表单</p>
            </section>
            <section>
                <h2 className={c('title')}>代码示例</h2>
                <ExampleBox description="表单数据验证，提交，是否必填" title="基本使用" code={require('!!raw-loader!./code/baseCode.tsx')}>
                    <Form form={forRef}>
                        <Form.Item label="账号" rule={{ require: true, message: "账号长度必须大于等于3", formatterRule: { type: 'text', len: 10, min: 3, max: 10 } }}>
                            <Input name="user" preIconFix={userIcon} onChange={handleUserChange} value={userValue} />
                        </Form.Item>
                        <Form.Item label="密码" rule={{ message: "密码长度必须大于3，小于10", formatterRule: { type: 'text', len: 10, min: 3, max: 10 }, trigger: "blur" }}>
                            <Input name="password" preIconFix={passwordIcon} onChange={handlePasswordChange} value={passwordValue} />
                        </Form.Item>
                    </Form>
                </ExampleBox>
            </section>
        </div>
    );
}

export default FormExample;