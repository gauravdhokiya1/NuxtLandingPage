<template>
    <button class="btn button">{{ props.buttontext }}</button>
</template>

<script setup>
const props = defineProps({
    buttontext : { type: String }
})
console.log(props.buttontext)
</script>