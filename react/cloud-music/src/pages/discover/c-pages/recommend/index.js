import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTopBannerAction } from './store/actionCreators'


function HYRecommend(props) {
  
  const { topBanners } = useSelector(state => ({
    topBanners: state.recommend.topBanners
  }))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  return (
    <div>
      <h2>{topBanners.length}</h2>
    </div>
  )
}

export default memo(HYRecommend);


// function HYRecommend(props) {
//   const { getBanners, topBanners } = props; 
//   useEffect(() => {
//     getBanners()
//   }, [getBanners])

//   return (
//     <div>
//       <h2>{topBanners.length}</h2>
//     </div>
//   )
// }


// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// });

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })



// export default connect(mapStateToProps, mapDispatchToProps)(memo(HYRecommend));

