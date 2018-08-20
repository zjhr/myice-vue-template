import Vue from 'vue'
import axios from 'axios'

// 创建axios实例
const service = axios.create({
	baseURL: '/api', // api的base_url
	timeout: 10000 // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(config =>{
	//loading show
	return config
}, err => {
	//loading hide
	return Promise.reject(err)
})

// 响应拦截器
service.interceptors.response.use(res =>{
	//loading hide
	return res
}, err => {
	//loading hide
	return Promise.reject(err)
})

Vue.prototype.$axios = service
