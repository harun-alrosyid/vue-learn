<script setup>
import CompositionComponent from './components/CompositionComponent.vue';
import OptionComponent from './components/OptionComponent.vue';
import TryMe from './components/TryMe.vue';

const name = "harun";

</script>

<template>
  <header>
   <h1>vue-learn</h1>
  </header>
  <p>{{name}}</p>
  <TryMe msg="harun"/>
  <OptionComponent/>
  <CompositionComponent/>
</template>

<style scoped>

</style>
