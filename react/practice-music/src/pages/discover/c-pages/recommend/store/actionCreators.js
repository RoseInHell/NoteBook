import * as actionTypes from './constants';

import { getTopBanners, getHotRecommends } from '@/services/recommend';
import { HOT_RECOMMEND_LIMIT } from '@/common/constants';

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}

const changeHotBannerAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})

export const getHotRecommendAction = () => {
  return dispatch => {
    getHotRecommends(HOT_RECOMMEND_LIMIT).then(res => {
      dispatch(changeHotBannerAction(res))
    })
  }
}