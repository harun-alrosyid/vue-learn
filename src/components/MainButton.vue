<script setup>
const disabled = true;
</script>

<template>
    <!-- v-bind disabled -->
    <button :disabled class="btn btn-primary">Main Button</button>
    <button :disabled="disabled" class="btn btn-primary">Main Button</button>
    <button v-bind:disabled="disabled" class="btn btn-primary">Main Button</button>
</template>