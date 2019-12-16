import request from '../helpers/request'
import { stringify } from 'querystring';
// 测试1
export function _getMessage(params) {
    return request(`/news/selectNews?${stringify(params)}`)
  }
  export function login1(params) {
    return request(`/news/selectNews?${stringify(params)}`)
  }

  // 测试2
export function login2(data) {
    return request(`/xxx/xxx2`, {
      method: 'post',
      body: data,
    })
  }