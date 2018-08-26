import axios from 'axios';



// 模糊查询慢病
export function fuzzyQuery(params) {
    return axios.post('localhost:8080/DimiService/getCodeDesc',params)
        .then((res) => {
            if(res.flagCode === true){
                return res;
            }
            return Promise.reject(res);
        })
        .catch((err) => {
            return Promise.reject(err);
        })
}

// 查询登录态和当前用户信息
export function checkUserInfo() {
    return axios.post('',{},)
        .then((res) => {
            return res;
        })
        .catch(() => {

        })
}