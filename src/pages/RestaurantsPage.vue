<script lang="ts" setup>
import { Notify } from "quasar";
// TODO - IMPLEMENTAR O LOGOUT
const logout = () => {
  console.log("realizar logout");
};

const restaurantsList = [
  {
    title: "Restaurante do Alemão",
    img: "https://encurtador.com.br/jqrx4",
    icon: "store",
  },
  {
    title: "Restaurante Árabe",
    img: "https://t.ctcdn.com.br/Lhe5xjU4Hg96bl8iKlq29UyiBMk=/665x374/smart/i219128.jpeg",
    icon: "flight",
  },
  {
    title: "Restaurante Chinês",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Goldensondika.jpg/200px-Goldensondika.jpg",
    icon: "pets",
  },
  {
    title: "Restaurante Russo",
    img: "https://ae01.alicdn.com/kf/S92e7eedd31624b2d97b3a977f0ce5786V/2022-legal-moda-ucr-nia-t-camisa-para-as-mulheres-ucr-nia-impress-o-da-bandeira.jpg",
    icon: "military_tech",
  },
  {
    title: "Restaurante Africano",
    img: "https://rj.aguiamontagemdemoveis.com.br/wp-content/uploads/2021/02/indisponivel-3-300x300.png",
    icon: "do_not_disturb_off",
  },
  {
    title: "Restaurante Americano",
    img: "https://preview.redd.it/m2tnnyu4c5d21.jpg?auto=webp&s=2f39649532757f4814ba47298a8d62e7451fd01b",
    icon: "drocket_launch",
  },
];

const msg = (n: string) => {
  Notify.create({
    message: `Bem vindo ao ${n}`,
    color: "green-7",
  });
};
</script>

<template>
  <q-layout view="hHr LpR lFf">
    <q-page-container class="row q-gutter-x-md">
      <q-card
        v-for="restaurant in restaurantsList"
        class="q-col-md-5 justify-center item-center"
      >
        <q-card-section>
          <q-img :src="restaurant.img" />
        </q-card-section>
        <q-card-section>
          <div class="text-h6">
            {{ restaurant.title }}
          </div>
        </q-card-section>
        <q-card-section class="text-center">
          <q-btn
            :icon="restaurant.icon"
            rounded
            flat
            color="primary"
            clickable
            @click="msg(restaurant.title)"
          />
        </q-card-section>
      </q-card>
    </q-page-container>
    <q-page class="row items-center justify-evenly">
      <q-btn @click="logout" icon="logout" flat>Sair</q-btn>
    </q-page>
  </q-layout>
</template>
