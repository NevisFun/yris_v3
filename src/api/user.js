/**
 * @author wang.chaofeng
 * @email hzspaces@126.com
 * @create date 2021-06-07 20:13:05
 * @modify date 2021-06-08 20:55:51
 * @desc 获取用户信息请求
 */

import request from './request.js';
import config from '../config/index.js';

export async function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  });
}

export function getUserInfo(accessToken) {
  return request({
    url: '/userInfo',
    method: 'post',
    data: {
      [config.tokenName]: accessToken
    }
  });
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  });
}

export function register() {
  return request({
    url: '/register',
    method: 'post'
  });
}
