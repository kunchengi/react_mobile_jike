// 封装axios
import axios from 'axios'

const httpInstance = axios.create({
    baseURL: 'http://geek.itheima.net',// 基地址
    timeout: 5000,// 超时时间
})

// 请求拦截器
// 在请求发送之前做拦截，插入一些自定义的配置
httpInstance.interceptors.request.use(
    config => {
        return config
    },
    err => Promise.reject(err)
)

// 响应拦截器
// 在响应返回之前做拦截，对数据进行一些处理
httpInstance.interceptors.response.use(
    response => {
        return response
    },
    err => {
        return Promise.reject(err)
    }
)

export default httpInstance