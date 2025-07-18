import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { obtenerPaginasPermitidas } from '@/helpers/Autorizacion';

function estaAutenticado() {
  let relt = localStorage.getItem('auth') === 'true'
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
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      requiereAutenticacion: true, //protegida
    }
  },
  {
    path: '/estudiante',
    name: 'estudiante',
    component: () => import('@/views/EstudianteView.vue'),
    meta: {
      requiereAutenticacion: true, //protegida
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/notas',
    name: 'notas',
    component: () => import('@/views/NotasIngresoView.vue'),
    meta: {
      requiereAutenticacion: true, //protegida
    }
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/RecursoProhibidoView.vue'),
    meta: {
      requiereAutenticacion: true, //protegida
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// antes de cada (pagina) - Guardian
router.beforeEach((to, from, next) => {
  // se ejecutara cada vez que se ingrese a la ruta
  console.log('Antes');
  //validamos si la apagina debe estar autenticada requiereAutenticacion: true 
  if (to.meta.requiereAutenticacion) {
    //si no esta autenticado
    console.log('Auth')
    if (!estaAutenticado()) {
      console.log('exito');
      next('/login');
    } else {
      //autenticado, aqui valido si esta autorizado
      let usuario = localStorage.getItem('usuario');
      let arreglos = obtenerPaginasPermitidas(usuario);
      if (arreglos.includes(to.path)) {
        next();
      }else{
        next('/403');
      }
    }
  } else {
    next();
  }
})
export default router
