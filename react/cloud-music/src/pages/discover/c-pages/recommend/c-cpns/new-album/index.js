import React, { memo } from 'react';

import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import { AlbumWrapper } from './style';


export default memo(function HYNewAlbum() {
  return (
    <AlbumWrapper>
      <HYThemeHeaderRCM title="新碟上架" />
    </AlbumWrapper>
  )
})
