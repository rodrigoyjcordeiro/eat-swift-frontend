<template lang="">
  <Div >
      <H3 class="text-grey-9">Histórico de pedidos</H3>
    </Div>
  <q-page class= 'row q-gutter-x-md'>


    <q-card style= "width: 250px; height: 300px"  v-for="i in historico" >
      <q-card-section class="items-center">
        <div class='text-h6 text-grey-8 text-center'> {{i.local}} </div>
      </q-card-section>

      <q-separator inset />

      <div class="text-caption text-grey on-right" >
        <br/>
        <q-icon color="green" name="verified"></q-icon> Pedido Concluido - {{i.numero}} <br/><br/>
        <b>{{i.qtd}}</b> {{i.pedido}}

      </div>
      <br/>
      <q-separator inset />

      <q-card-section class="q-pt-none"  >
        <div class="text-caption text-grey" justify-start>
          <br/> Avaliação  <q-rating v-model="stars" :max="5" size="20px" justify-end></q-rating>
        </div>
      </q-card-section>


      <q-separator inset />

<q-card-actions align="center">
  <q-btn flat color='primary' label='Pedir novamente' @click="clickb"/>
</q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
import { Notify } from "quasar";

function clickb(msg) {
  Notify.create({
    message: `Pedido adicionado ao carrinho`,
    color: "red-6",
  });
}

const historico = [
  {
    local: "Casa do Hamburguer",
    numero: "Nº1555",
    qtd: "1",
    pedido: "Combo da casa (hambúrguer, fritas e coca lata)",
  },
  {
    local: "Casa do Pastel",
    numero: "Nº1556",
    qtd: "2",
    pedido: "Pastel de Frango c/ catupiry e 2 Refrigerante lata",
  },
  {
    local: "Pizaria do Manuel",
    numero: "Nº1557",
    qtd: "1",
    pedido: "Pizza inteira (1/2queijo e 1/2calabresa) e Refrigerante" ,
  },
]

</script>
<style lang="">

</style>
