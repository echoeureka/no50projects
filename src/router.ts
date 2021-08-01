import {
  createRouter,
  createWebHashHistory,
  createWebHistory
} from 'vue-router'
import App from './App'
import ExpandingCards from './views/expanding-cards'

const routes = [
  { path: '/', component: App },
  { path: '/expandingcards', component: ExpandingCards }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
export { router }
