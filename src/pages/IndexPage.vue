<script lang="ts" setup>

// TODO - IMPLEMENTAR O LOGOUT
const logout = () => {
  console.log("realizar logout")
}
</script>

<template>
  <q-page class="row items-center justify-evenly">
     <q-btn @click="logout" icon="logout" flat>Sair</q-btn>
  </q-page>
</template>


