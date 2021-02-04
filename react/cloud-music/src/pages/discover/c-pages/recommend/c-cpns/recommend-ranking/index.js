import React, { memo } from 'react';

import HYThemeHeaderRCM from '@/components/theme-header-rcm'
import { RankingWrapper } from './style';

export default memo(function HYRecommendRanking() {
  return (
    <RankingWrapper>
      <HYThemeHeaderRCM title="榜单" />
    </RankingWrapper>
  )
})
