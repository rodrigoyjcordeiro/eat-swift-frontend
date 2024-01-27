<template lang="">
    <div>
        <h1>Pedidos</h1>
        <q-btn @click="voltar">voltar</q-btn>
    </div>
</template>
<script setup lang ="ts">
import{useRouter} from "vue-router";
const $router = useRouter()

const voltar = () => {
     $router.push('/home')
}
</script>
<style lang="">
    
</style>