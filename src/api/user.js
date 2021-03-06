import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vue-admin-dashboard/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-dashboard/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-dashboard/user/logout',
    method: 'post'
  })
}
