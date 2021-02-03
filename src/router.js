import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Menu from './components/template/Menu'
import MenuAlternativo from './components/template/MenuAlternativo'
import Usuario from './components/usuario/Usuario'
import UsuarioLista from './components/usuario/UsuarioLista'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import UsuarioEditar from './components/usuario/UsuarioEditar'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'inicio',
      components: {
        default: Inicio,
        menu: Menu
      }
    },
    {
      path: '/usuario/',
      components: {
        default: Usuario,
        menu: MenuAlternativo,
        menuInferior: MenuAlternativo
      },
      props: true,
      children: [
        {
          path: '',
          component: UsuarioLista
        },
        {
          path: ':id',
          component: UsuarioDetalhe,
          props: true,
          beforeEnter: (to, from, next) => {
            // eslint-disable-next-line
            console.log('Antes da rota -> USUÁRIO DETALHE')
            next()
          }
        },
        {
          path: ':id/editar',
          component: UsuarioEditar,
          props: true,
          name: 'editarUsuario'
        },
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  // eslint-disable-next-line
  console.log('Antes das rotas - GLOBAL')
  next()
})

export default router
