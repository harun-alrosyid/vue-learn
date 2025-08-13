<script setup>
// alternative name
defineOptions({
    name: "TryMe"
})
// to set up props
defineProps({ 
    msg: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <div>
        <p>Try Me {{ msg }}</p>
    </div>
</template>

<style scoped>

</style>