import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Cascader, Select, DatePicker} from 'antd';
import {updateDetail} from "../../actions/signInAction";

const FormItem = Form.Item;
const Option = Select.Option;


const options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];

class NormalDetailForm extends React.Component {
    constructor() {
        super();
        this.state = {
            formLayout: 'horizontal',
        };
    }
    handleSubmit = (e) => {
        e && e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const params = {
                    addr: this.cas,
                    sex: this.sex,
                    marriage: this.marriage,
                    job: this.job,
                    birthDate: this.birthDate
                }
                sessionStorage.setItem("detail",JSON.stringify(params))
                window.location.href = '#/order';
            }
        });
    }

    handleAddr = (res) => {
        this.cas = res;
    }

    handleSex = (res) => {
        this.sex = res;
    }

    handleMarriage = (res) => {
        this.marriage = res;
    }

    handleJob = (res) => {
        this.job = res;
    }

    handleBirthDate = (res) => {
        this.birthDate = res;
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
                    <Cascader options={options} style={{"textAlign":"left"}} onChange={this.handleAddr} placeholder="请输入所在地市" />
                </FormItem>
                <FormItem
                    label="性别："
                    {...formItemLayout}

                >
                    <Select onChange={this.handleSex} placeholder="请输入您的性别">
                        <Option value="男">男</Option>
                        <Option value="女">女</Option>
                    </Select>
                </FormItem>
                <FormItem
                    label="社保状态"
                    {...formItemLayout}

                >
                    <Select  onChange={this.handleSecure} placeholder="请选择您的社保状态">
                        <Option value="有社保">有社保</Option>
                        <Option value="无社保">无社保</Option>
                    </Select>
                </FormItem>
                <FormItem
                    label="婚姻状态"
                    {...formItemLayout}

                >
                    <Select  onChange={this.handleMarriage} placeholder="请选择您的婚姻状态">
                        <Option value="已婚">已婚</Option>
                        <Option value="未婚">未婚</Option>
                    </Select>
                </FormItem>
                <FormItem
                    label="出生日期"
                    {...formItemLayout}

                >
                    <DatePicker style = {{"width":"290px","textAlign":'left'}}onChange={this.handleBirthDate} placeholder="请选择您的出生日期"  />
                </FormItem>
                <FormItem
                    label="职业"
                    {...formItemLayout}

                >
                    <Select  onChange={this.handleJob} placeholder="请选择您的职业">
                        <Option value="工人">工人</Option>
                        <Option value="农民">农民</Option>
                    </Select>
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
export const WrappedNormalDetailForm = Form.create()(NormalDetailForm);

