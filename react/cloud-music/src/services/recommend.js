import request from './request';


export function getTopBanners() {
  return request({
    url: '/banner'
  })
}

export function getHotRecommends(limit) {
  return request({
    url: '/personalized',
    params: {
      limit:limit
    }
  })
}

export function getNewAlbum(limit) {
  return request({
    url: '/top/album',
    params: {
      limit:limit
    }
  })
}

export function getTopList(idx) {
  return request({
    url: '/top/list',
    params: {
      idx
    }
  })
}