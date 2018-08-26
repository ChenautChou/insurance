import React, { Component } from 'react';
import './signIn.less';


import { Layout, Input,Button, Icon} from 'antd';
import {withRouter} from "react-router-dom";
import CommonHeader from "../../components/header/CommonHeader";
import CommonFooter from "../../components/footer/CommonFooter";
import {WrappedNormalLoginForm} from "../../components/form/LoginForm";
import {WrappedNormalSignUpForm} from "../../components/form/SignUpForm";


const {Content } = Layout;



const {Content} = Layout;


class SignIn extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLogin: true
        }
    }

    switchLogin = (isLogin) => {
        this.setState({
            isLogin: isLogin
        })
    }


      render() {
        const {isLogin} = this.state;
        return (
            <Layout>
                <CommonHeader isLogin />
                <Content>
                    <div className="sign-container">
                        <img src={require('../../assets/img3.jpg')} />
                        <div className="form-container">
                            {
                                isLogin ?
                                    <div className='login-form-wrapper'>
                                        <div className="login-title">登  录</div>
                                        <WrappedNormalLoginForm />
                                        <p onClick={() => {this.switchLogin(false)}}>还没有注册？现在注册</p>
                                    </div>:
                                    <div className='signup-form-wrapper'>
                                        <div className="login-title">加入我们</div>
                                        <WrappedNormalSignUpForm />
                                        <p onClick={() => {this.switchLogin(true)}}>已有账户，现在去登录</p>
                                    </div>
                            }

                        </div>
                    </div>
                </Content>
                <CommonFooter />
            </Layout>

        );
  }
}


export default withRouter(SignIn);

