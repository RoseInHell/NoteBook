import React, { memo, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import HYThemeHeaderRCM from '@/components/theme-header-rcm'
import { RankingWrapper } from './style';
import { getTopListAction } from '../../store/actionCreators';
import HYTopRanking from '@/components/top-ranking';

export default memo(function HYRecommendRanking() {

  // redux hooks
  const { upRanking, newRanking, originRanking } = useSelector(state => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"])
  }), shallowEqual);

  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch]);

  return (
    <RankingWrapper>
      <HYThemeHeaderRCM title="榜单" />
      <div className="tops">
        <HYTopRanking info={upRanking} />
        <HYTopRanking info={newRanking} />
        <HYTopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  )
})
