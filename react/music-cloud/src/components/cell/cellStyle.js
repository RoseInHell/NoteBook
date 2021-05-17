import styled from 'styled-components';

export const CellWrapper = styled.div`
  position: relative;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 16px;
  overflow: hidden;
  color: #333333;
  font-size: 14px;
  line-height: 24px;
  background-color: #fff;
  align-items: center;
  cursor: pointer;
  font-size:18px;
  &:active{
    background-color: #f2f3f5;
  }
`