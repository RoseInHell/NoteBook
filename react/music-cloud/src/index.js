import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import store from '@/store';
import "@/assets/css/reset.css";
import App from './App';

import { getUserAction, userLoginOutAction, getAgencyAction } from './store/app/actionCreators';
import { getUserByAccessToken, getAccessToken, getDailConfig } from './services/appService';


let hostname = 'www.diyigaokao.com';

const load = function () {

  // 情况1：
  // 正常打开
  // 尝试从localStorage获取之前的用户信息
  const isUser = localStorage.getItem('_userinfo_caches') && JSON.parse(localStorage.getItem('_userinfo_caches'));
  
  // 如果localStorage有用户信息
  // 存储到store，然后根据localStorage的accessToken和id获取新的用户信息，然后获取代理机构信息，完成后显示页面
  if (isUser && isUser.accessToken) {
    store.dispatch(getUserAction(isUser));
    fetchUserInfo(isUser.accessToken, isUser.id, isUser.refreshToken, fetchDailiConfig);
    return;
  }

  // 情况2：
  // 如果localStorage没有用户信息
  // 直接获取代理机构信息，完成后显示页面
  fetchDailiConfig();
}
const fetchUserInfo = function fetchUser (accessToken, id, refreshToken, next) {
  getUserByAccessToken(accessToken, id).then(res => {
    //新的用户信息存储到store
    store.dispatch(getUserAction(res.data))
    
    // 继续下一步
    next();
    return;
  }).catch(err => {
    if ((err.error === 301 || err.error === 400) && refreshToken) {
      // 获取新的accessToken
      getAccessToken(refreshToken).then(res => {
        // 获取到了新的accessToken，递归重新获取用户信息
        fetchUser(res.data, id, refreshToken, next)
      }).catch(() => {
        // refreshToken也过期或者无效，清除之前存储到store的用户信息，跳到下一步
        store.dispatch(userLoginOutAction())
        next();
      })
      return;
    }
    // 获取失败，accessToken过期或者无效，也没有refreshToken
    store.dispatch(userLoginOutAction())
  })
}
const fetchDailiConfig = function() {
  // 获取代理机构基础配置信息
  getDailConfig(hostname).then(res => {

    // 代理机构信息存储到store
    store.dispatch(getAgencyAction(res))

    // 如果未登录，设置初始省份
    const user = store.getState().getIn(['app', 'user']);
    if (user.utype === 0) {
      user.provinceId = res.data.provinces[0].provinceId
      user.provinceName = res.data.provinces[0].provinceId
      store.dispatch(getUserAction(user))
    }
  }).catch(() => {})
  
}

// 执行load
load()

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);
