import React, { memo } from 'react';
import { CellWrapper } from './cellStyle';

export default memo(function Cell() {
  return (
    <CellWrapper className="van-cell">
      <i></i>
      <span></span>
      <i></i>
    </CellWrapper>
  )
})
