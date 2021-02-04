import React, { memo } from 'react';

import { RecommendWrapper, RecommendLeft, Content, RecommendRight } from './style';
import HYTopBanner from './c-cpns/top-banner';
import HYHotRecommend from './c-cpns/hot-recommend';


function HYRecommend() {
  return (
    <RecommendWrapper>
      <HYTopBanner/>
      <Content className="wrap-v2">
        <RecommendLeft>
          <HYHotRecommend/>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}

export default memo(HYRecommend);
