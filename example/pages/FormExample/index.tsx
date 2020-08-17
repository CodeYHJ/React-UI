import React from 'react';
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
    return (
        <div className={c()}>
            <ExampleBox description="Form表单" title="Form">
                <Form>
                    <Form.Item label="bsese">
                        <Input />
                    </Form.Item>
                    <Form.Item label="preIconFix">
                        <Input preIconFix={icon} />
                    </Form.Item>
                    <Form.Item label="sufIconFix">
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
                    </Form.Item>
                </Form>
            </ExampleBox>
        </div>
    );
}

export default FormExample;