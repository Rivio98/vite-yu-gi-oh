<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { cards } from './store.js';
export default {
  data() {
    return {
      cards,
    }
  },
  components: {
    AppHeader,
    AppMain,
  },
  created() {
    this.getCards();
  },
  methods: {
    getCards() {
      axios.get(cards.apiUrl).then((result) => {
        cards.cardsArray = result.data.data
      })
    }
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use './styles/generals.scss';
</style>
