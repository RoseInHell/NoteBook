import { 
  ADD_NUMBER,
  CHANGE_BANNER,
  CHANGE_RECOMMEND
} from './constants';

const initialState = {
  counter: 0,
  banner: [],
  recommend: []
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_NUMBER:
      return {...state, counter: state.counter + action.num};
    case CHANGE_BANNER:
      return {...state, banner: action.banners};
    case CHANGE_RECOMMEND:
      return {...state, recommend: action.recommend}
    default:
      return state;
  }
}

export default reducer;