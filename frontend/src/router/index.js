import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Solution from '../views/Solution.vue'
import Detect from '../views/Detect.vue'
import Monitor from '../views/Monitor.vue'
import Heal from '../views/Heal.vue'
import ServiceCase from '../views/ServiceCase.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import AdminLogin from '../views/AdminLogin.vue'
import AdminDashboard from '../views/AdminDashboard.vue'


const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/detect', name: 'Detect', component: Detect },
  { path: '/monitor', name: 'Monitor', component: Monitor },
  { path: '/heal', name: 'Heal', component: Heal },
  { path: '/service-case', name: 'ServiceCase', component: ServiceCase },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/admin/login', name: 'AdminLogin', component: AdminLogin },
  { path: '/admin/dashboard', name: 'AdminDashboard', component: AdminDashboard },
  { path: '/solution', name: 'Solution', component: Solution },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router