import React from 'react';
import { Steps, Icon } from 'antd';
import './steps.less';

const Step = Steps.Step;

export default class CommonSteps extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="steps-wrapper" >
                <Steps progressDot current={this.props.current}>
                    <Step title="登录" />
                    <Step title="完善个人信息"/>
                    <Step title="完善慢病信息"/>
                </Steps>
            </div>
        )
    }


}