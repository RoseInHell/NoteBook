import request from './request';

export function getDailConfig(host) {
  return request({
    url: '/index/dailiConfig',
    params: {
      host
    }
  })
}

export function login(params) {
  return request({
    url: '/login',
    params
  })
}

export function getUserByAccessToken(accessToken, id) {
  return request({
    url: `/member/userByAccessToken/${id}`,
    headers: {
      accessToken
    }
  })
}

export function getAccessToken(refreshToken) {
  return request({
    url: '/token/accessToken',
    params: {
      refreshToken
    }
  })
}