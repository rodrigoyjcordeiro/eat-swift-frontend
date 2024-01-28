<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          EatSwift
        </q-toolbar-title>
        <q-btn icon="shopping_cart" flat>
          <q-badge color="blue" floating class="text-white">{{ useShoppingStore.order }}</q-badge>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          <q-item v-for="link in linksList" clickable="">
             <q-item-section>
             </q-item-section>
             <q-item-section>
             </q-item-section>
          </q-item>
        </q-item-label>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import {useShoppingCartStore} from "stores/shopping-cart-store";
const leftDrawerOpen = ref(false)
const useShoppingStore = useShoppingCartStore()
const linksList = [
  {
    title: 'Estabelecimentos',
    caption: 'Procure por estabelecimentos',
    icon: 'store',
    to: '/estabelecimento'
  },
  {
    title: 'Produtos',
    caption: 'Encontre seu produto aqui',
    icon: 'restaurant',
    to: '/produto'
  },
  {
    title: 'Pedidos',
    caption: 'Visualize o histórico dos seus pedidos',
    icon: 'list_alt',
    to: '/pedido'
  },
  {
    title: 'Configuracoes da conta',
    caption: 'Gerencie informacoes da sua conta',
    icon: 'settings',
    to: '/conta'
  },
];

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>
