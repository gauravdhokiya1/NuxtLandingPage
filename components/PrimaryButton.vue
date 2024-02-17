<template>
    <button class="btn button" type="button" :class="props.class">{{ props.buttontext }}</button>
</template>

<script setup>
const props = defineProps({
    buttontext : { type: String },
    class : { type: String}
})
</script>