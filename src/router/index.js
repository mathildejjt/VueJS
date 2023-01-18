import { createRouter, createWebHashHistory } from 'vue-router'
import JournalView from '../views/JournalView.vue'
import ContactView from '../views/ContactView.vue'
import ClavierView from '../views/ClavierView.vue'

const routes = [
  {
    path: '/',
    name: 'Contact',
    component: ContactView
  },
  {
    path: '/Journal',
    name: 'Journal',
    component: JournalView

  },
  {
  path: '/Clavier',
  name: 'Clavier',
  component: ClavierView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
