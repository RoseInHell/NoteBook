import axios from 'axios';

import { BASE_URL, TIMEOUT } from "./config";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
});

instance.interceptors.request.use(config => {
  // 1.发送网络请求时, 在界面的中间位置显示Loading的组件

  // 2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面

  // 3.params/data序列化的操作

  return config;
}, err => {

});

instance.interceptors.response.use(response => {
  const res = response.data
  if (res.error === 0) {
    return res
  } else {
    return Promise.reject(res)
  }
}, err => {
  return Promise.reject(err);
});

export default instance;

