import HYDiscover from '@/pages/discover';
import HYMine from '@/pages/mine';
import HYFriends from '@/pages/friends';


const routes = [
  {
    path: "/",
    exact: true,
    component: HYDiscover
  },
  {
    path: "/mine",
    exact: true,
    component: HYMine
  },
  {
    path: "/friends",
    exact: true,
    component: HYFriends
  },
]

export default routes;