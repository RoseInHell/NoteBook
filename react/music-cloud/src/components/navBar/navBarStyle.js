import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 44px;
  line-height: 44px;
  background-color: white;
  position: relative;
  .common{
    position: absolute;
    top: 0;
    bottom: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    padding: 0 16px;
    font-size: 14px;
    cursor: pointer;
  }
`

export const Left = styled.div`
  left: 0;

`

export const Center = styled.div`
  max-width: 60%;
  margin: 0 auto;
  color: #333333;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis
`

export const Right = styled.div`
  right: 0;
`