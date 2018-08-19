import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            formLayout: 'horizontal',
        };
    }


    render() {
        const { formLayout } = this.state;
        const formItemLayout = formLayout === 'horizontal' ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
        } : null;
        const buttonItemLayout = formLayout === 'horizontal' ? {
            wrapperCol: { span: 14, offset: 4 },
        } : null;
        return (
            <Form onSubmit={this.handleSubmit} layout={formLayout} className="login-form">
                <FormItem
                    label="所在地市："
                    {...formItemLayout}
                >
                    <Input placeholder="input placeholder" />
                </FormItem>
                <FormItem
                    label="性别："
                    {...formItemLayout}

                >
                    <Input placeholder="input placeholder" />
                </FormItem>
                <FormItem
                    label="社保状态"
                    {...formItemLayout}

                >
                    <Input placeholder="input placeholder" />
                </FormItem>
                <FormItem
                    label="婚姻状态"
                    {...formItemLayout}

                >
                    <Input placeholder="input placeholder" />
                </FormItem>
                <FormItem
                    label="出生日期"
                    {...formItemLayout}

                >
                    <Input placeholder="input placeholder" />
                </FormItem>
                <FormItem
                    label="职业"
                    {...formItemLayout}

                >
                    <Input placeholder="input placeholder" />
                </FormItem>
                <FormItem>
                    <Button size="large" type="primary" htmlType="submit" className="login-form-button" block>
                        下一步
                    </Button>
                    <a href="">跳过</a>
                </FormItem>
            </Form>
        );
    }
}
export const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

