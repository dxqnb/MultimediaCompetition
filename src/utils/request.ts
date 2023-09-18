/**
 * axios 封装
 */
import axios from "axios";
//@ts-ignore
// import router from './router';
// import {
// 	getTokenLocal, removeTokenLocal
// } from "@/utils/auth.js"
// 创建一个 axios 实例
const service = axios.create({
	withCredentials: true, // send cookies when cross-domain requests
	// baseURL: "http://localhost:8081/",
	// baseURL: "http://100.99.22.97:8081/",
	// baseURL: "http://100.94.53.1:8081/",
	baseURL: "http://8.130.64.102:8082/",
	timeout: 100000, // 设定响应超时
	headers: {
		"Content-Type": "application/json;charset=UTF-8"
	}
	// headers: {
  //   'Content-Type': 'multipart/form-data',
  // },
});
/**
 * 请求拦截器
 */
// service.interceptors.request.use((config) => {
//
// 	const token = getTokenLocal();
// 	if (token)
// 		config.headers.Authorization = token; // 传参方式：headers
//
// 	// 在发送请求之前做些什么
// 	Toast.loading('加载中...'); // 显示loading
// 	return config;
// }, (error) => { // 处理请求错误
// 	Toast.clear(); // 隐藏loading
// 	return Promise.reject(error);
// });

/**
 * 响应拦截器，
 * 每次响应的格式
 * { code => 状态码, msg => '响应信息', data => 数据 }
 */
// service.interceptors.response.use((response) => {
// 	Toast.clear(); // 隐藏loading
// 	const result = response.data; //注意后端返回的数据格式 result = { code msg data }
// 	if (result.code == 1) { //注意返回的code值的含义
// 		return Promise.resolve(result); //返回成功
// 	} else {
//
// 		// 如果Token错误（用户没登录 或 Token过期）
// 		if (result.code === 401) {
// 			Dialog.confirm({
// 				title: "要重新登录吗?",
// 				message: result.message,
// 			}).then(() => {
// 				removeTokenLocal(); //清除本地保存的Token
//
// 				//跳转到 Login ,并传递参数（登录后返回的路径)
// 				router.push({
// 					name: 'login',
// 					params: {
// 						redirect: router.currentRoute.fullPath
// 					}
// 				});
// 			}).catch(() => {
// 				//路由跳转到首页
// 				router.push({
// 					name: "home"
// 				});
// 			});
// 		} else {
// 			Dialog.alert({
// 				title: "响应错误",
// 				message: result.message
// 			});
// 		}
// 	}
// }, (error) => {
// 	console.error("响应出错:" + error); //控制台错误提示
// 	Toast.clear(); // 隐藏loading
// 	Dialog.alert({ // 全局错误提示
// 		title: "响应拦截器错误",
// 		message: error.message
// 	});
// 	return Promise.reject(error);
// });

//默认引出
export default service;