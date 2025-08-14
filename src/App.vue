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

// v-for
const listFruits = [
  "apple",
  "banana",
  "orange",
]

const listNested = [
  [
    "apple",
    "banana",
    "orange",
  ],
  [
    "apple",
    "banana",
    "orange",
  ],
]

const listNestedObject = [
  {type:"tropial",fruits:[
    "apple",
    "banana",
    "orange",
  ]},
  {type:"nontropial",fruits:[
    "apple",
    "banana",
    "orange",
  ]},
]
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
  <!-- v-for -->
  <ul>
    <li v-for="fruit in listFruits" v-bind:key="fruit">{{ fruit }}</li>
  </ul>
  <!-- nested -->
  <ul>
    <li v-for="nested in listNested" v-bind:key="nested">
      <ul>
        <li v-for="fruit in nested" :key="fruit">{{ fruit }}</li>
      </ul>
    </li>
  </ul>
  <!-- nested object -->
  <ul>
    <li v-for="nested in listNestedObject" v-bind:key="nested">
      <p>{{ nested.type }}</p>
      <ul>
        <li v-for="fruit in nested.fruits" :key="fruit">{{ fruit }}</li>
      </ul>
    </li>
  </ul>
</template>

<style scoped></style>
