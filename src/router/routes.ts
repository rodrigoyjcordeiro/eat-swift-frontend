import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/BlankLayout.vue'),
    children: [{ path: '', component: () => import('pages/LoginPage.vue') }],
  },
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },

  {
    path: '/produto',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ProdutoPage.vue') }],
  },
  {
    path: '/estabelecimento',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/EstabelecimentoPage.vue') }],
  },
  {
    path: '/pedido',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/PedidoPage.vue') }],
  },
  {
    path: '/conta',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ConfigContaPage.vue') }],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
