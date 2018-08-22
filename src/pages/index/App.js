import React, { Component } from 'react';
import './app.less';
import {withRouter} from "react-router-dom";


import { Layout,Dropdown, Menu,Cascader, Button, Icon} from 'antd';
import CommonHeader from '../../components/header/CommonHeader';
import CommonFooter from '../../components/footer/CommonFooter';
import SearchInput from '../../components/searchInput/SearchInput';
import { Input } from 'antd';

const Search = Input.Search;

const { Header, Content } = Layout;





class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            showCas:false,
            options:null
        }
    }
    getInput = (inputs) => {
        console.log(inputs);
    }
    clickDisease = ({key}) => {
        console.log(key);
    }
    generateOverlay = () => {
        return (
            <Menu onClick={this.clickDisease}>
                <Menu.Item key="1">1st menu item</Menu.Item>
                <Menu.Item key="2">2nd memu item</Menu.Item>
                <Menu.Item key="3">3rd menu item</Menu.Item>
            </Menu>
        )
    }
    static overlay = (
        <Menu>
            <Menu.Item key="1">1st menu item</Menu.Item>
            <Menu.Item key="2">2nd memu item</Menu.Item>
            <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
    )
    switchInput = () => {
        this.setState({
            showCas:!this.state.showCas
        })
    }

    componentDidMount() {
      debugger;
      console.log(this.props.location.query.id || "1");
        this.setState({
            options:[{
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
            }]
        })
    }

      render() {
        const {showCas, options} = this.state;
        return (
            <Layout>
                <CommonHeader />
                <Content >
                    <div className="content-container">
                        <img  src = {require('../../assets/img2.jpg')} alt={'ehealth'}/>
                        <div className="main-content">
                            {
                                showCas ?
                                    <div>
                                        <Cascader
                                            options={options}
                                            size="large"
                                            enterButton="查询"
                                            matchInputWidth
                                            style = {{"width":"350px"}}
                                            placeholder={"请查找您关注的慢性疾病.."}
                                        />
                                        <Button  type="primary" size="large" style={{"marginLeft":"5px"}}>查询</Button>
                                    </div>
                                :
                                    <SearchInput placeholder="input search text" style={{ width: 200 }} />

                            }
                            <a onClick={this.switchInput}>没有找到您关注的疾病..</a>
                        </div>
                    </div>
                </Content>
                <CommonFooter />
            </Layout>
        );
      }
}
export default withRouter(App);

