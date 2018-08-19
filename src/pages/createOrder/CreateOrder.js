import React, { Component } from 'react';
import './createOrder.css';


import { Layout} from 'antd';
import {withRouter} from "react-router-dom";
import CommonHeader from "../../components/header/CommonHeader";
import CommonFooter from "../../components/footer/CommonFooter";
import {WrappedNormalLoginForm} from "../../components/form/OrderForm";
import CommonSteps from "../../components/steps/Steps";


const {Content } = Layout;




class CreateOrder extends Component {

    constructor(props){
        super(props);
    }


    render() {
        return (
            <Layout>
                <CommonHeader isLogin />
                <Content>
                    <CommonSteps current={2}/>

                    <div className="order-container">
                        <img src={require('../../assets/img1.jpg')} />
                        <div className="form-container">
                            <WrappedNormalLoginForm />
                        </div>
                    </div>
                </Content>
                <CommonFooter />
            </Layout>
        );
    }
}


export default withRouter(CreateOrder);

