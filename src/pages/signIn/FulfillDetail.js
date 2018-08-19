import React, { Component } from 'react';
import './fulfillDetail.css';


import { Layout} from 'antd';
import {withRouter} from "react-router-dom";
import CommonHeader from "../../components/header/CommonHeader";
import CommonFooter from "../../components/footer/CommonFooter";
import {WrappedNormalLoginForm} from "../../components/form/DetailForm";
import CommonSteps from "../../components/steps/Steps";


const {Content } = Layout;




class FulfillDetail extends Component {

    constructor(props){
        super(props);
    }


    render() {
        return (
            <Layout>
                <CommonHeader isLogin />
                <Content>
                    <CommonSteps current={1}/>
                    <div className="detail-container">
                        <img src={require('../../assets/img3.jpg')} />
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


export default withRouter(FulfillDetail);

