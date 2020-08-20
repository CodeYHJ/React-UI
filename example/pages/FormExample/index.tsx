import React, { useState, ChangeEvent } from 'react';
import { classPre } from "../../util/index"
import ExampleBox from '../../component/ExampleBox';
import Icon from '@lib/Icon/localIcon';
import ExampleApi from '../../component/ExampleApi';
import "./index.less";
import { Form, Input } from '@lib/index';
export interface FormExampleProps {

}

const c = classPre('Form')

const FormExample: React.SFC<FormExampleProps> = () => {
    const icon = <Icon name="cancel" />
    const [value, setValue] = useState('')
    const [value1, setValue1] = useState('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const handleChange1 = (e: ChangeEvent<HTMLInputElement>) => {
        setValue1(e.target.value)
    }
    return (
        <div className={c()}>
            <ExampleBox description="Form表单" title="Form">
                <Form>
                    <Form.Item label="bsese" rule={{ require: true, message: "check", rule: { type: 'text', len: 10, min: 3, max: 10 } }}>
                        <Input name="test" onChange={handleChange} value={value} />
                    </Form.Item>
                    <Form.Item label="preIconFix">
                        <Input name="test1" preIconFix={icon} onChange={handleChange1} value={value1} />
                    </Form.Item>
                    {/* <Form.Item label="sufIconFix">
                        <Input sufIconFix={icon} />
                    </Form.Item>
                    <Form.Item label="allIconFix" >
                        <Input sufIconFix={icon} defaultValue='asdasd' preIconFix={icon} />
                    </Form.Item>
                    <Form.Item label="preStrFix">
                        <Input preStrFix='http://' />
                    </Form.Item>
                    <Form.Item label="sufStrFix">
                        <Input sufStrFix='.com' />
                    </Form.Item>
                    <Form.Item label="allStrFix">
                        <Input preStrFix='http://' sufStrFix='.com' />
                    </Form.Item> */}
                </Form>
            </ExampleBox>
        </div>
    );
}

export default FormExample;