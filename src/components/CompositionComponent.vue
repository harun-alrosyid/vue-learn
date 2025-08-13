<script setup>
const name = "Composition Component";
const click = () => {
    console.log("clicked");
}
</script>

<template>
    <div>
        <h1>{{name}}</h1>
        <button @click="click">Button</button>
    </div>
</template>