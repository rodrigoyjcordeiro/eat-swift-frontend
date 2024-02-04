<template lang="">
  <q-page class= 'row q-gutter-x-md'>
    <q-card style = 'width: 300px; height: 550px' v-for="i in pedidos">
      <q-img :src="(i.img)">
      </q-img>

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="paid"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        @click="click1(i.preco)"
          />
      </q-card-section>

      <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis text-center">
          {{i.titulo}}
          </div>
        </div>

        <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
        {{i.preco}}
        </div>
        <div class="text-caption text-grey">
          {{i.descricao}}
        </div>

        <q-input
        v-model="textareaModel"
        filled
        clearable
        type="textarea"
        color="red-12"
        label="Observação..."
        :shadow-text="textareaShadowText"
        @keydown="processTextareaFill"
        @focus="processTextareaFill"
      ></q-input>
      </q-card-section>

      <q-separator></q-separator>

      <q-card-actions  align='center'>
        <q-btn flat color='primary' icon="shopping_cart" label= 'Adicionar no carrinho' @click="click2()"></q-btn>
      </q-card-actions>

    </q-card>
  </q-page>

</template>

<script setup>
import { Notify } from "quasar";
function click1(msg) {
  Notify.create({
    message: `O produto custa ${msg}`,
    color: "red-6",
  });
}
function click2(msg) {
  Notify.create({
    message: `concluído`,
    color: "red-6",
  });
}


const pedidos = [
  {
    img: "https://minervafoods.com/wp-content/uploads/2022/12/como_fazer_hamburguer_caseiro-1.jpg",
    titulo: "Hamburguer Artesanal",
    preco: "R$ 45,90・Hamburguer de Cordeiro",
    descricao: "Hamburguer de cordeiro mal passado, alface, tomate e picles.",
  },
  {
    img: "https://loja.barracadoze.com.br/wp-content/uploads/sites/5/2020/10/pastel-frango-com-catupiry.jpg",
    titulo: "Pastel do China",
    preco: "R$ 11,90・Pastel de Flango",
    descricao: "Pastel de flango com muito catupily, (sem devolução)",
  },
  {
    img: "https://3.bp.blogspot.com/-IY2PWeBH4Mc/UE9xQICbG1I/AAAAAAAAFQE/bF3BLlNS5Uc/s1600/C%C3%B3pia+de+Imagem+1182.jpg",
    titulo: "Cerveja Artesanal",
    preco: "R$ 21,90・Duff Beer",
    descricao: "Cerveja artesanal Duff, Puro malte 350ml - origem: Bar do Moes The Simpsons",
  },

];
</script>
<style lang="">
</style>
