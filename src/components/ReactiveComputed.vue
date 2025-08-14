<script setup>
import { reactive, computed } from 'vue'

// ini pake reactive karena object kalo cuma string number atau boolean pakai ref
const person = reactive({
  name: 'harun',
  age: 20,
})

/** Turunan untuk display saja (cached, read-only) */
const ageLabel = computed(() => `${person.name} — age: ${person.age}`)

/** Proxy untuk v-model: membaca & menulis ke person.age */
const ageModel = computed({
  get() {
    return person.age
  },
  set(val) {
    // amanin input: terima number/string angka
    const n = Number(val)
    if (!Number.isNaN(n)) {
      person.age = n
    }
  },
})

function add() {
  person.age++
}
</script>

<template>
  <div style="display:grid; gap:.5rem; max-width:320px">
    <p>{{ person.name }} - {{ person.age }}</p>
    <p>{{ ageLabel }}</p>

    <!-- set() akan terpanggil saat user mengubah nilai -->
    <label>
      Edit age (v-model ke computed):
      <input type="number" v-model.number="ageModel" />
    </label>

    <button @click="add">Increment age</button>
  </div>
</template>
