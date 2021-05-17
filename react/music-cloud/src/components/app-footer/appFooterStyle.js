import styled from 'styled-components';

export const FooterWrapper = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 -2px 6px rgb(170 170 170 / 20%);
  background-color: #fff;
  padding-bottom: env(safe-area-inset-bottom);
  transition-duration: 0.4s;

  ul{
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom: 0; // 消除 antd ul的自带样式
    padding-bottom: 5px;
    li{
      padding: 5px 0 0 0;
      text-align:center;
      flex: 1;
      .g-iconfont{
        font-size: 20px;
      }
      a{
        height: 50px;
        box-sizing: border-box;
        color: #A0A5B1;
        &.active{
          color:#3384FF;
        }
      }
    }
  }
`