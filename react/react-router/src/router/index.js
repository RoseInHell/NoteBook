const home = () => import('../pages/home')
const about = () => import('../pages/about')
const profile = () => import('../pages/profile')


const routes = [
  {
    path: '/',
    exact: true,
    component: home
  },
  {
    path: '/about',
    component: about
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/user',
    component: user
  }
]

export default routes;