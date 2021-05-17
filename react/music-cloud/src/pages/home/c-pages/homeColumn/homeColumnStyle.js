import styled from 'styled-components';

export const HomeColumnlWrapper = styled.div`
  padding: 10px 0 0 0;
  margin-bottom: 10px;
  background-color:white;
  ul{
    display:flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: #fff;
    .item_li{
      width: 25%;
      flex-shrink: 0;
      background-color: #fff;
      display:flex;
      flex-direction:column;
      align-items:center;
      padding-bottom:10px;
      .name{
        padding-top: 10px;
      }
      img{
        width: 44px;
        height: 43px;
      }
    }
  }
`

