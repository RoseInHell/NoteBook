import axios from 'axios';
import { MessageBox, Message } from 'element-ui';

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    // 如果是post，设置content-type
    // 默认使用application/x-www-form-urlencoded，当接口格式需要为application/json时，在对应接口请求里面配置即可
    if (config.method === 'post' || config.method === 'put') {
      if (config.headers.post['Content-Type'] === 'application/json') {
        return config;
      }
      // post Content-Type 默认值 application/x-www-form-urlencoded
      config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    }
    return config;
  },
  (error) => {
    console.log(error); // for debug
    Promise.reject(error);
  },
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== 20000) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000,
      });
      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        MessageBox.confirm(
          '你已被登出，可以取消继续留在该页面，或者重新登录',
          '确定登出',
          {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning',
          },
        );
      }

      return Promise.reject(new Error(res.message || 'Error'));
    }
    return res;
  },
  (error) => {
    console.log(`err${error}`); // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  },
);

export default service;
