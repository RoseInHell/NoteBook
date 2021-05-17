import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { FooterWrapper } from './appFooterStyle';

export default memo(function AppFooter() {
  const tabBar = [
    { name: '首页', path: '/home', icon: '&#xe6e6;'},
    { name: '志愿方案', path: '/zhiyuan', icon: '&#xe6e5;'},
    { name: '我的', path: '/member', icon: '&#xe6eb;'},
  ]

  return (
    <FooterWrapper>
      <ul>
        {
          tabBar.map(item => {
            return (
              <li key={item.name}>
                <NavLink to={item.path}>
                  <i className="g-iconfont" dangerouslySetInnerHTML={{ __html: item.icon }}></i>
                  <div>{item.name}</div>
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    </FooterWrapper>
  )
})
