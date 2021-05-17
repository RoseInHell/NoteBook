import React from 'react';
import { Redirect } from 'react-router-dom';

const Home = React.lazy(() => import("@/pages/home/home.js"));
const Login = React.lazy(() => import("@/pages/login/login.js"));
const Member = React.lazy(() => import("@/pages/member/member.js"));

const routes = [
  {
    path: '/',
    exact: true,
    render: () => (
      <Redirect to="/home"/>
    )
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/member',
    component: Member
  }
]

export default routes;