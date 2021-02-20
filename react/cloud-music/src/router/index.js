import React from 'react';
import { Redirect } from 'react-router-dom';


const HYDiscover = React.lazy(() => import("@/pages/discover"));
const HYRecommend = React.lazy(_ => import("../pages/discover/c-pages/recommend"));
const HYRanking = React.lazy(_ => import("../pages/discover/c-pages/ranking"));
const HYSongs = React.lazy(_ => import("../pages/discover/c-pages/songs"));
const HYDjradio = React.lazy(_ => import("../pages/discover/c-pages/djradio"));
const HYArtist = React.lazy(_ => import("../pages/discover/c-pages/artist"));
const HYAlbum = React.lazy(_ => import("../pages/discover/c-pages/album"));
const HYPlayer = React.lazy(_ => import("../pages/player"));

const HYFriends = React.lazy(_ => import("../pages/friends"));
const HYMine = React.lazy(_ => import("../pages/mine"));

// import HYDiscover from '@/pages/discover';
// import HYRecommend from '@/pages/discover/c-pages/recommend';
// import HYRanking from '@/pages/discover/c-pages/ranking';
// import HYDjradio from '@/pages/discover/c-pages/djradio';
// import HYSongs from '@/pages/discover/c-pages/songs';
// import HYArtist from '@/pages/discover/c-pages/artist';
// import HYAlbum from '@/pages/discover/c-pages/album';
// import HYMine from '@/pages/mine';
// import HYFriends from '@/pages/friends';
// import HYPlayer from '@/pages/player';


const routes = [
  {
    path: '/',
    exact: true,
    render: () => (
      <Redirect to="/discover"/>
    )
  },
  {
    path: "/discover",
    component: HYDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend"/>
        )
      },
      {
        path: "/discover/recommend",
        component: HYRecommend
      },
      {
        path: "/discover/ranking",
        component: HYRanking
      },
      {
        path: "/discover/songs",
        component: HYSongs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: HYDjradio
      },
      {
        path: "/discover/artist",
        component: HYArtist
      },
      {
        path: "/discover/album",
        component: HYAlbum
      },
      {
        path: "/discover/player",
        component: HYPlayer
      }
    ]
  },
  {
    path: "/mine",
    component: HYMine
  },
  {
    path: "/friends",
    component: HYFriends
  },
]

export default routes;