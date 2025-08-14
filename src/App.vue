<script setup>
import { ref } from 'vue'
import MainButton from './components/MainButton.vue'
import TryMe from './components/TryMe.vue'

const name = 'harun'

const paragraph = "<p style='color:red'>paragraph</p>"

const id = 'iniId'

const active = ref(false)

const onclickToggle = () => {
  active.value = !active.value
}
</script>

<template>
  <header>
    <h1>vue-learn</h1>
  </header>
  <!-- v-if  -->
  <button @click="onclickToggle">Toggle</button>
  <p v-if="active">active</p>
  <p v-else>inactive</p>
  <!--  -->
  <p>{{ name }}</p>
  <try-me msg="harun" />
  <OptionComponent />
  <composition-component />

  <!-- raw html -->

  <div>{{ paragraph }}</div>

  <div v-html="paragraph"></div>

  <!-- binding -->

  <div v-bind:id="id">ini id</div>

  <MainButton />
</template>

<style scoped></style>
