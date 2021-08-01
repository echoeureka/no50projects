import { createRouter, createWebHistory } from 'vue-router'
import App from './App'
import ExpandingCards from './views/expanding-cards'
import ProgressSteps from './views/progress-steps'

const routes = [
  { path: '/', component: App },
  { path: '/expanding-cards', component: ExpandingCards },
  { path: '/progress-steps', component: ProgressSteps }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
export { router }
