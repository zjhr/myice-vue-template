import Vue from 'vue'
import axios from 'axios'

// 请求拦截器
axios.interceptors.request.use(config =>{
	//loading show
	return config
}, err => {
	//loading hide
	return Promise.reject(err)
})

// 响应拦截器
axios.interceptors.response.use(res =>{
	//loading hide
	return res
}, err => {
	//loading hide
	return Promise.reject(err)
})

Vue.prototype.$axios = axios
