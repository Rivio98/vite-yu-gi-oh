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
    this.getCards(),
      this.getArchetypes()
  },
  methods: {
    getCards() {
      axios.get(cards.apiUrl).then((result) => {
        cards.cardsArray = result.data.data
      });
    },
    getArchetypes() {
      axios.get(cards.apiArchetypes).then((result) => {
        for (let i = 0; i < 10; i++) {
          let k = Math.floor(Math.random() * result.data.length + 1)
          cards.archetypesArray.push(result.data[k].archetype_name)
        }
      });
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
