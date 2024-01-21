<script setup lang="ts">
import {useRouter} from "vue-router";
const $router = useRouter()
  const login = () => {
    $router.push('/home')
  }
</script>

<template>
  <q-page class="row justify-center items-center">
    Pagina de Login <q-btn flat icon="login" @click="login">Entrar</q-btn>
  </q-page>
</template>

