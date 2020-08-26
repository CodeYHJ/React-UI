import React, { useState, ChangeEvent } from 'react';
import { Form, Input, Icon } from '@com/index';
export interface FormDemoProps {

}

const FormDemo: React.SFC<FormDemoProps> = () => {

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

    return (
        <div>
            <Form>
                <Form.Item
                    label="账号"
                    rule={{
                        require: true,
                        message: "账号长度必须大于等于3",
                        formatterRule: {
                            type: 'text',
                            len: 10,
                            min: 3,
                            max: 10
                        }
                    }}>
                    <Input
                        name="user"
                        preIconFix={userIcon}
                        onChange={handleUserChange} value={userValue} />
                </Form.Item>
                <Form.Item
                    label="密码"
                    rule={{
                        message: "密码长度必须大于3，小于10",
                        formatterRule: {
                            type: 'text',
                            len: 10,
                            min: 3,
                            max: 10
                        },
                        trigger: "blur"
                    }}>
                    <Input name="password"
                        preIconFix={passwordIcon}
                        onChange={handlePasswordChange}
                        value={passwordValue} />
                </Form.Item>
            </Form>
        </div>
    );
}

export default FormDemo;