import React, { memo, useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Form, Input, Button, } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { LoginWrapper } from "./loginStyle";
import NavBar from "@/components/navBar/navBar.js";
import { login } from '@/services/appService';
import { getUserAction } from '@/store/app/actionCreators';

export default memo(function Login() {

  // redux hooks
  const { agency } = useSelector(state => ({
    agency: state.getIn(['app', 'agency'])
  }), shallowEqual)

  const dispatch = useDispatch();

  // other hooks
  const onFinish = useCallback((values) => {
    const params = {
      userName: values.userName,
      password: values.password,
      uuid: 'agentM',
      platform: 'app',
      dailiId: agency.id
    }
    // 登录接口
    login(params).then(res => {
      dispatch(getUserAction(res))
    }).catch(() => {})
  }, [agency.id, dispatch])

  const onFinishFailed = useCallback((errorInfo) => {
    console.log('Failed:', errorInfo);
  }, [])

  return (
    <LoginWrapper>
      <div className="g-navbar">
        <NavBar title="会员登录" />
      </div>
      <div className="page-content">
        <div className="pic">
          <img
            src={require("../../assets/imgs/2020101301_1.png").default}
            alt=""
          />
        </div>
        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="userName"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"/>
          </Form.Item>

          <Form.Item >
            <Button type="primary" htmlType="submit" shape="round" >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </LoginWrapper>
  );
});
