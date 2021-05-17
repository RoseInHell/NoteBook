import * as actionTypes from './constants';

const changeAgencyAction = (res) => ({
  type: actionTypes.CHANGE_AGENCY,
  agency: res.data
})

export const getAgencyAction = (res) => {
  return dispatch => {
    dispatch(changeAgencyAction(res))
  }
}

const updataUserAction = (user) => ({
  type: actionTypes.UPDATA_USER,
  user
})

export const getUserAction = (res) => {
  return dispatch => {
    dispatch(updataUserAction(res))
  }
}

export const userLoginOutAction = () => ({
  type: actionTypes.APP_USER_LOGOUT
})