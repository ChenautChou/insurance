import React, { Component } from 'react';

import { Select,Button } from 'antd';
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';
import {fuzzyQuery, checkUserInfo}  from '../../actions/indexAction';

const Option = Select.Option;

let timeout;
let currentValue;

// 输入即调用
function fetch(value, callback) {
    if (timeout) {
        clearTimeout(timeout);
        timeout = null;
    }
    currentValue = value;

    function fake() {
        const str = {
            codeDesc: value,
        };
        fuzzyQuery(str)
            .then((res) => {
                if (currentValue === value) {
                    const result = res.retDat && res.retDat.refCodeDescList || [];
                    const data = [];
                    result.forEach((r) => {
                        data.push({
                            value: r.did,
                            text: r.codeDesc,
                        });
                    });
                    callback(data);
                }
            });
    }

    timeout = setTimeout(fake, 300);
}

export default class SearchInput extends React.Component {
    state = {
        data: [],
        value: undefined,
    }

    handleSearch = (value) => {
        fetch(value, data => this.setState({ data }));
    }

    handleChange = (value) => {
        this.setState({ value });
    }

    handleClick = () => {
        sessionStorage.setItem("disease", this.state.value);
        //查询用户信息 如果未登录拉登录，如果登录查询用户详细信息，没有有详细信息补充，有详细信息带入订单页

    }

    render() {
        const options = this.state.data.map(d => <Option key={d.value}>{d.text}</Option>);
        return (
            <div>
            <Select
                showSearch
                value={this.state.value}
                defaultActiveFirstOption={false}
                showArrow={false}
                filterOption={false}
                onSearch={this.handleSearch}
                onChange={this.handleChange}
                notFoundContent={null}
                placeholder="请输入您关注的慢性疾病.."
                enterButton="查询"
                size="large"
                style={{"width":"350px"}}
                allowClear
            >
                {options}
            </Select>
            <Button type="primary" size="large" style={{"marginLeft":"5px"}} onClick={this.handleClick}>查找</Button>
            </div>

        );
    }
}