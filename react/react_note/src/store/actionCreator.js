import { 
  ADD_NUMBER,
  CHANGE_BANNER,
  CHANGE_RECOMMEND
} from "./constants";


export const addAction = num => ({
  type: ADD_NUMBER,
  num
})

export const changeBannerAction = banners => ({
  type: CHANGE_BANNER,
  banners
})

export const changeRecommendAction = recommend => ({
  type: CHANGE_RECOMMEND,
  recommend
})



export const getHomeMultidataAction = dispatch => {

}