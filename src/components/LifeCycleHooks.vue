<!-- <template>
  <div>
    <h2 ref="titleEl">Counter: {{ count }}</h2>
    <button @click="count++">Tambah</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

const count = ref(0)
const titleEl = ref(null)
let intervalId = null

onMounted(() => {
  console.log('✅ mounted: komponen sudah di DOM')
  // Akses DOM via template ref
  if (titleEl.value) titleEl.value.style.color = 'blue'

  // Side effect: auto-increment tiap 1 detik
  intervalId = setInterval(() => {
    count.value++
  }, 1000)
})

onBeforeUpdate(() => {
  // Tepat sebelum DOM re-render karena reactive state berubah
  // Cocok untuk sync ke non-Vue instance sebelum berubah
//   console.log('beforeUpdate')
})

onUpdated(() => {
  // Setelah DOM selesai di-update
//   console.log('updated')
})
 onBeforeUnmount(() => {
  console.log('🛑 beforeUnmount: bersihkan resource')
  clearInterval(intervalId)
})

onUnmounted(() => {
  console.log('🗑 unmounted: komponen dihapus dari DOM')
})
</script> -->
<template>
  <div>
    <h2>Users ({{ windowWidth }}px)</h2>

    <div v-if="loading">Loading...</div>
    <ul v-else>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const users = ref([])
const loading = ref(true)
const windowWidth = ref(window.innerWidth)

// ✅ Ambil data API saat komponen mount
onMounted(async () => {
  console.log('Komponen mounted, fetching data...')
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    users.value = await res.json()
  } catch (err) {
    console.error('Gagal fetch:', err)
  } finally {
    loading.value = false
  }

  // Pasang event listener resize
  window.addEventListener('resize', handleResize)
})

function handleResize() {
  windowWidth.value = window.innerWidth
}

// 🛑 Bersihkan event listener saat unmount
onBeforeUnmount(() => {
  console.log('Komponen akan dihapus, bersihkan listener...')
  window.removeEventListener('resize', handleResize)
})
</script>
