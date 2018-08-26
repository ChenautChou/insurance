import React from 'react';
import {Link} from 'react-router-dom';
import {Form, Icon, Input, Button, Checkbox} from 'antd';

import {signIn} from "../../actions/signInAction";

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e && e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const params = {
                    mobile: values[0],
                    password: values[1]
                }
                signIn(params).then(() => {

                });

                console.log('Received values of form: ', values);
            }
        };
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('mobile', {
                        rules: [{ required: true, message: '请输入您的手机号' }],
                    })(
                        <Input prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />} size="large" placeholder="请输入手机号" />
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
                   {/* {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}*/}
                    {/*<a className="login-form-forgot" href="">Forgot password</a>*/}
                    <Button size="large" type="primary" htmlType="submit" className="login-form-button" block onClick={this.handleSubmit}>
                        登   录
                    </Button>
                </FormItem>
            </Form>
        );
  }
}
export const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

