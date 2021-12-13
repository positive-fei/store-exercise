import request from './request'

export function getHomeBanner() {
  return request({
      url: '/api/home/banner'
  })
}