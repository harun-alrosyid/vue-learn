<script setup>
defineProps({    
    isLoading: {
        type: Boolean,
}
})
const disabled = true;
const btnAttributes = {
    disabled,
    class: "btn btn-primary btn-lg" ,
    id: "buttonId"
}
const disabledCheck=(isLoading) => {
    if(isLoading) return false
    return true;
}

const isSeen =(data)=>{
    return data;
}
</script>

<template>
    <!-- v-bind disabled -->
    <button :disabled class="btn btn-primary">Main Button</button>
    <button :disabled="disabled" class="btn btn-primary">Main Button</button>
    <button v-bind:disabled="disabled" class="btn btn-primary">Main Button</button>

    <!-- v-bind btnAttributes -->
    <button v-bind="btnAttributes">Main Button</button>
    <button :disabled="disabledCheck(isLoading)" >Main Button</button>

    <!-- v-bind isSeen -->
     <p v-if="isSeen(true)">Main Buttonq</p>
     <p v-if="isSeen(false)">Main Buttonw</p>
</template>