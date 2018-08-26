import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Row, Col, DatePicker, InputNumber } from 'antd';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }


    render() {
        const { formLayout } = this.state;
        return (
            <Form onSubmit={this.handleSubmit}  className="login-form">
                <div className="tri-col-wrapper">
                    <FormItem label="慢病系统：">
                        <Input placeholder="慢病系统" />
                    </FormItem>
                    <FormItem label="慢病类别：">
                        <Input placeholder="慢病类别" />
                    </FormItem>
                    <FormItem label="慢病名称：">
                        <Input placeholder="慢病名称" />
                    </FormItem>
                </div>
                <div className="tri-col-wrapper">
                    <FormItem label="投保开始日期：">
                        <DatePicker onChange={this.handleBirthDate} placeholder="选择..."  />
                    </FormItem>
                    <FormItem label="住院审核选择：">
                        <Input placeholder="住院审核" />
                    </FormItem>
                    <FormItem label="投保人数：">
                        <InputNumber min={1} max={20} defaultValue={1} onChange={this.crutialHos} />
                    </FormItem>
                </div>
                <div className="tri-col-wrapper">
                    <FormItem label="免赔金额：">
                        <Input placeholder="免赔金额" />
                    </FormItem>
                    <FormItem label="共付比例：">
                        <Input placeholder="共付比例" />
                    </FormItem>
                </div>
                <div className="bi-col-wrapper">

                    <FormItem label="慢病过去一年住院次数：">
                        <InputNumber min={0} max={20} defaultValue={0} onChange={this.crutialHos} />
                    </FormItem>
                    <FormItem label="其他疾病过去一年住院次数：">
                        <InputNumber min={0} max={20} defaultValue={0} onChange={this.crutialHos} />
                    </FormItem>

                </div>
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

