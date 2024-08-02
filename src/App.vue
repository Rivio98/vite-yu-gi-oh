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
    this.getArchetypes();
  },
  methods: {
    getCards() {
      const url = cards.archetype_search
        ? `${cards.apiUrl}&archetype=${cards.archetype_search}&num=20`
        : `${cards.apiUrl}&num=20`;
      axios.get(url).then((response) => {
        cards.cardsArray = response.data.data;
      });
    },
    getArchetypes() {
      axios.get(cards.apiArchetypes).then((result) => {
        for (let i = 0; i < 10; i++) {
          let k = Math.floor(Math.random() * result.data.length);
          cards.archetypesArray.push(result.data[k].archetype_name);
        }
      });
    }
  }
}
</script>

<template>
  <AppHeader />
  <AppMain @filter_cards="getCards" />
</template>

<style lang="scss">
@use './styles/generals.scss';
</style>
