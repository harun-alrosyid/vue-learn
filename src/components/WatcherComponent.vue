<script setup>
import { ref, watch } from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const loading = ref(false)

// Debounce manual
let timer = null
let aborter = null

watch(question, (newQ) => {
  const q = String(newQ).trim()

  // Harus ada tanda tanya ? (baik ASCII "?" maupun full-width "？")
  const hasQuestionMark = /[?？]/.test(q)
  if (!hasQuestionMark) {
    // Optional: reset state saat tidak ada tanda tanya
    loading.value = false
    answer.value = 'Questions usually contain a question mark. ;-)'
    if (aborter) aborter.abort()
    if (timer) clearTimeout(timer)
    return
    }

  // Debounce 400ms
  if (timer) clearTimeout(timer)
  timer = setTimeout(async () => {
    // Batalkan request sebelumnya jika ada
    if (aborter) aborter.abort()
    aborter = new AbortController()

    loading.value = true
    answer.value = 'Thinking...'

    try {
      const res = await fetch('https://yesno.wtf/api', {
        signal: aborter.signal
      })
      const data = await res.json()
      // data.answer = "yes" | "no" | "maybe"
      answer.value = data.answer
    } catch (err) {
      if (err.name !== 'AbortError') {
        answer.value = 'Error! Could not reach the API. ' + err
      }
    } finally {
      loading.value = false
    }
  }, 400)
})
</script>

<template>
  <p>
    Ask a yes/no question:
    <input v-model.trim="question" :disabled="loading" placeholder="Type something and end with ?" />
  </p>
  <p>{{ answer }}</p>
</template>
