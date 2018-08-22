import React, {Component} from 'react';
import './signIn.less';


import {Layout, Input, Button, Icon} from 'antd';
import {withRouter} from 'react-router-dom';
import CommonHeader from '../../components/header/CommonHeader';
import CommonFooter from '../../components/footer/CommonFooter';
import {WrappedNormalLoginForm} from '../../components/form/Form';


const {Content} = Layout;


class SignIn extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
    <Layout>
        <CommonHeader isLogin />
        <Content>
            <div className="sign-container">
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


export default withRouter(SignIn);

