import { createRouter, createWebHistory } from 'vue-router'
import ExpandingCards from './views/expanding-cards'
import Home from './views/Home'
import ProgressSteps from './views/progress-steps'
import RotatingNavigationAnimation from './views/rotating-navigation-animation'

const routes = [
  { path: '/', component: Home },
  { path: '/expanding-cards', component: ExpandingCards },
  { path: '/progress-steps', component: ProgressSteps },
  {
    path: '/rotating-navigation-animation',
    component: RotatingNavigationAnimation
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
export { router }
