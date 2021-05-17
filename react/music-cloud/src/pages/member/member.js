import React, { memo } from 'react';
import { MemberWrapper } from'./memberStyle';
import Cell from '@/components/cell/cell.js';

export default memo(function Member() {
  return (
    <MemberWrapper>
      <Cell>123</Cell>
    </MemberWrapper>
  )
})
