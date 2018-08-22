import React from 'react';
import {Link} from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        /*e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });*/
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} size="large" placeholder="请输入手机号" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
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
                    <Button size="large" type="primary" htmlType="submit" className="login-form-button" block>
                        登   录
                    </Button>
                    <Link  to="">现在注册</Link>
                </FormItem>
            </Form>
        );
    }
}
export const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

