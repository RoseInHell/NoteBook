import React, { memo } from 'react';

import { 
  HeaderWrapper,
  Left,
  Center,
  Right
} from './navBarStyle';

import {
  LeftOutlined
} from '@ant-design/icons'; 

export default memo(function AppHeader(props) {
  const { title, noBackBottom } = props

  const leftClick = () => {
    window.history.go(-1)
  }
  return (
    <HeaderWrapper className="app-header">
      <div >
        <Left className="common">
          { noBackBottom === undefined && <LeftOutlined onClick={e => leftClick()} /> }
        </Left>
        
        <Center>
          {title}
        </Center>

        <Right className="common" >
          
        </Right>
      </div>
    </HeaderWrapper>
  )
})
