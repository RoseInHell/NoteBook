import React, { memo } from 'react';

import { RecommendWrapper, RecommendLeft, Content, RecommendRight } from './style';
import HYTopBanner from './c-cpns/top-banner';
import HYHotRecommend from './c-cpns/hot-recommend';
import HYNewAlbum from './c-cpns/new-album';


function HYRecommend() {
  return (
    <RecommendWrapper>
      <HYTopBanner/>
      <Content className="wrap-v2">
        <RecommendLeft>
          <HYHotRecommend/>
          <HYNewAlbum/>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}

export default memo(HYRecommend);
