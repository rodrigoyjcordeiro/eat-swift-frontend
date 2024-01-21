import { defineStore } from 'pinia';

export const useShoppingCartStore = defineStore('shoppingCartStore', {
  state: () => ({
    order: 2,
    orderList:[]
  }),
  getters: {
  },
  actions: {
    increment() {
      this.order++;
    },
    decrement() {
      this.order--;
    },
  },
});
