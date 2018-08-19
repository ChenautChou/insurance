import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Button, Icon} from 'antd';


const { Header } = Layout;



export default class CommonHeader extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Header style={{background:'#fff'}}>
                <div className="logo"><img src={require('./grass.png')} style={{'width':"40px"}}/> KANCHI</div>
                <Menu
                    theme="light"
                    mode="horizontal"
                    style={{ lineHeight: '64px',float:'right' }}

                >
                    {
                        this.props.isLogin ?
                            <Menu.Item key="1"><Link to={'/index'}>首页</Link></Menu.Item>
                            :
                            <Menu.Item key="1"><Link to={'/signIn'}>登录/注册</Link></Menu.Item>
                    }
                    <Menu.Item key="2">我的订单</Menu.Item>
                    <Menu.Item key="3">我的团险</Menu.Item>
                    <Menu.Item key="4">关于我们</Menu.Item>
                </Menu>
            </Header>
        )
    }


}