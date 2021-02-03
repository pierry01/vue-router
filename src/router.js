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

export default new Router({
  mode: 'history',
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
          props: true
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
