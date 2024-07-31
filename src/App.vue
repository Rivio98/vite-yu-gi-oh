<script lang="">
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { cards } from './store.js';
export default {
  components:{
    AppHeader,
    AppMain,
    cards
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style></style>
