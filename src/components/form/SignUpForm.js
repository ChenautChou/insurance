import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import {signUp} from "../../actions/signInAction";

const FormItem = Form.Item;

class NormalSignUpForm extends React.Component {
    handleSubmit = (e) => {
        e && e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const params = {
                    mobile: values[0],
                    password: values[1]
                }
                signUp(params).then(() => {})

                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem
                >
                    {getFieldDecorator('nickname', {
                        rules: [{ required: true, message: '请输入您的用户名'}],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} size="large" placeholder="请输入您的用户姓名" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('mobile', {
                        rules: [{ required: true, message: '请输入正确的手机号' }],
                    })(
                        <Input prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />} size="large" placeholder="请输入手机号" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: '请输入正确的邮箱',
                        }, {
                            required: true, message: '请输入正确的邮箱',
                        }],
                    })(
                        <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} size="large" type="email" placeholder="请输入您的个人邮箱" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入正确的登录密码' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} size="large" type="password" placeholder="请输入登录密码" />
                    )}
                </FormItem>
                <FormItem>
                    <Button size="large" type="primary" htmlType="submit" className="login-form-button" block onClick={this.handleSubmit}>
                        注  册
                    </Button>
                </FormItem>
            </Form>
        );
    }
}
export const WrappedNormalSignUpForm = Form.create()(NormalSignUpForm);

