import axios from 'axios';


function handleDataRedirection(res){
    sessionStorage.setItem('detailSession', res);
    sessionStorage.setItem('orderSession', res);
    //登录成功查询用户信息并跳转
    //history.pushState('/detail');
    //
    //history.pushState('./order');
}

// 登录
export function signIn(params) {
    return axios.post('http://localhost:8080/DimiService/login',{params})
        .then((res) => {
            if(res.flagCode === true){
                handleDataRedirection();
                return res;
            }
            return Promise.reject(res);
        })
        .catch((err) => {
            return Promise.reject(err);

    })
}
export function signUp(params) {
    return axios.post('http://localhost:8080/DimiService/regedit',{params})
        .then((res) => {
            if(res.flagCode === true){
                handleDataRedirection();
                return res;
            }
            return Promise.reject(res);
        })
        .catch((err) => {
            return Promise.reject(err);

        })
}

export function updateDetail(params) {
    return axios.post('http://localhost:8080/DimiService/regedit',{params})
        .then((res) => {
            if(res.flagCode === true){
                handleDataRedirection();
                return res;
            }
            return Promise.reject(res);
        })
        .catch((err) => {
            return Promise.reject(err);

        })
}

// 获取用户信息
export function getUserInfo() {
    return axios.post('',{},)
        .then((res) => {
            return res;
        })
        .catch(() => {

        })
}