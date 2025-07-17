import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

function estaAutenticado() {
  let relt= localStorage.getItem('auth') === 'true'
  console.log(relt);
  return relt;
}
const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      requiereAutenticacion: true, //protegida
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/estudiantes',
    name: 'estudiantes',
    component: () => import('@/views/EstudianteView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  // se ejecutara cada vez que se ingrese a la ruta
  console.log('Antes');
  if (to.meta.requiereAutenticacion) {
    //si no esta autenticado
    console.log('Auth')
    if (!estaAutenticado()) {
      console.log('exito');
      next('/login');
    } else {
      next();
    }
  } else {
    next();
  }
})
export default router
