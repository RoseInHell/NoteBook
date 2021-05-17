import styled from 'styled-components';

export const LoginWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  .pic{
    width: 150px;
    height: 82px;
    margin: 50px auto 30px;
    img{
      width: 150px;
      height: 82px;
    }
  }

  .ant-form{
    padding-left: 14px;
    padding-right: 14px;
    .ant-form-item-control-input-content{
      display:flex;
      padding: 10px 16px;
      align-items:center;
      .anticon{
        padding: 0 15px 0 11px;
      }
    }
    .ant-col{
      .ant-form-item-explain{
        text-align:center;
      }
    }
    .ant-btn {
      width:100%;
      height:44px;
    }
  }
  
`