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
                    label="投保开始日期："
                    {...formItemLayout}
                >
                    <Input placeholder="input placeholder" />
                </FormItem>
                <FormItem
                    label="投保人数："
                    {...formItemLayout}

                >
                    <Input placeholder="input placeholder" />
                </FormItem>
                <FormItem
                    label="免赔金额："
                    {...formItemLayout}

                >
                    <Input placeholder="input placeholder" />
                </FormItem>
                <FormItem
                    label="共付比例："
                    {...formItemLayout}

                >
                    <Input placeholder="input placeholder" />
                </FormItem>
                <FormItem
                    label="住院审核选择："
                    {...formItemLayout}

                >
                    <Input placeholder="input placeholder" />
                </FormItem>
                <FormItem
                    label="慢病系统："
                    {...formItemLayout}

                >
                    <Input placeholder="input placeholder" />
                </FormItem>
                <FormItem
                    label="慢病名称："
                    {...formItemLayout}

                >
                    <Input placeholder="input placeholder" />
                </FormItem>
                <FormItem
                    label="慢病过去一年住院次数："
                    {...formItemLayout}

                >
                    <Input placeholder="input placeholder" />
                </FormItem>
                <FormItem
                    label="其他疾病过去一年住院次数："
                    {...formItemLayout}

                >
                    <Input placeholder="input placeholder" />
                </FormItem>
                <FormItem>
                    <Button size="large" type="primary" htmlType="submit" className="login-form-button" block>
                        保费计算
                    </Button>
                </FormItem>
            </Form>
        );
    }
}
export const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

