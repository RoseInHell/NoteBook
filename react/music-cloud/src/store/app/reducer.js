import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  // 省份数据
  provinces: [],
  // 代理数据
  agency: {},
  // 用户信息
  user: {
    // 用户类型
    utype: 0,
    // 所在省份id
    provinceId: 0,
    // 所在省份名称
    provinceName: '',
    // 文理科，0:文科，1:理科，2:未分科
    liberalScience: 0,
    // 真实姓名
    realName: '',
    // 高考年份
    gaoKaoYear: '',
    // 年级
    grade: '',
    // token
    accessToken: '',
    refreshToken: '',
    // 用户头像
    userIcon: '',
    // 用户id
    id: 0,
    // 用户卡号
    cardNumber: '',
    // 搜索历史
    collegeSearchHistory: [],
    majorSearchHistory: [],
    // 手机号
    mobile: 0,
    nickname: '',
    gender: '',
    // 通过苹果IAP购买钻石卡，用户付款成功之后，因为各种原因导致中断，用户再次进入时，要进行漏单处理
    // 见buy-write.vue
    todoBuyCardIosVerify: {
      // AppStore返回的购买凭证
      receiptData: '',
      // 订单号
      orderNo: '',
      // 下单时间
      time: 0
    },
    // app 检查版本更新的时间
    todoAppVersionCheckedTime: 0
  }
});

// 重置state
// 保留provinceId和provinceName，因为项目在任何状况下这两条数据都得存在
const reset = function (data) {
  data.utype = 0
  data.liberalScience = 0
  data.realName = ''
  data.gaoKaoYear = ''
  data.grade = ''
  data.accessToken = ''
  data.refreshToken = ''
  data.userIcon = ''
  data.id = 0
  data.cardNumber = ''
  data.collegeSearchHistory = []
  data.majorSearchHistory = []
  data.mobile = 0
  data.nickname = ''
  data.gender = ''
  data.todoBuyCardIosVerify.receiptData = ''
  data.todoBuyCardIosVerify.orderNo = ''
  data.todoBuyCardIosVerify.time = 0
}


function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_AGENCY:
      return state.set("agency", action.agency)
    case actionTypes.UPDATA_USER:
      // 将用户信息存储到localStorage
      localStorage.setItem('_userinfo_caches', JSON.stringify(action.user))
      return state.set("user", action.user)
    case actionTypes.APP_USER_LOGOUT:
      // 清楚localStorage中的用户数据
      localStorage.removeItem('_userinfo_caches')
      return state.set("user", reset(state.user))
    default: 
    return state;
  }
}

export default reducer;