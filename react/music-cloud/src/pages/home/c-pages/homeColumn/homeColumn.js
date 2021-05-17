import React, { memo, useCallback } from 'react';
import { useHistory } from "react-router-dom";
import { HomeColumnlWrapper } from './homeColumnStyle';

export default memo(function HomeColumn(props) {
  // router hooks
  let history = useHistory();

  // other hooks
  const itemClick = useCallback((url) => {
    history.push(`/${url.name}`)
  }, [history])

  // other handle
  const list = [
    { name: '院校查询', authority: 0, router: { name: 'CollegeList' }, img: require('@/assets/imgs/a2021022601.png').default },
    { name: '专业查询', authority: 0, router: { name: 'MajorList' }, img: require('@/assets/imgs/a2021022602.png').default },
    { name: '历年批次', authority: 0, router: { name: 'Score' }, img: require('@/assets/imgs/a2021022603.png').default },
    { name: '生涯课程', authority: 2, router: { name: 'CareerCourse' }, img: require('@/assets/imgs/a2021022604.png').default },
    { name: '名校展播', authority: 0, router: { name: 'CollegeDisplay' }, img: require('@/assets/imgs/a2021022605.png').default },
    { name: '专业视频', authority: 1, router: { name: 'MajorTalk' }, img: require('@/assets/imgs/a2021022606.png').default },
    { name: '自我评估', authority: 0, router: { name: 'Ceping' }, img: require('@/assets/imgs/a2021022607.png').default },
    { name: '专家介绍', authority: 0, router: { name: 'ProfessionService' }, img: require('@/assets/imgs/a2021022608.png').default }
  ]

  return (
    <HomeColumnlWrapper>
      <ul>
        {
          list.map(item => {
            return (
              <li key={item.name} className="item_li" onClick={e => itemClick(item.router)}>
                <div className="img_wrapper">
                  <img src={item.img} alt=""/>
                </div>
                <div className="name">{item.name}</div>
              </li>
            )
          })
        }
      </ul>
    </HomeColumnlWrapper>
  )
})
