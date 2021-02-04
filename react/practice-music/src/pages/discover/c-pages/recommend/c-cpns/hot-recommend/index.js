import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import HYTemeHeaderRCM from '@/components/theme-header-rcm';
import { HotRecommendWrapper } from './style';
import { getHotRecommendAction } from '../../store/actionCreators';

export default memo(function HYHotRecommend() {

  // redux hooks
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual);

  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction())
  }, [dispatch]);

  return (
    <HotRecommendWrapper>
      <HYTemeHeaderRCM title="热门推荐" keywords={['华语', "流行", "民谣", "摇滚", "电子"]} />
      <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return (
              <div key={item.id}>
                {item.id}
              </div>
            )
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
