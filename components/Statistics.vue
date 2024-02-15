<template>
    <div :class="props.StatisticPartClass">
        <span class="statistics-sec-head-text">{{ props.StatisticCountText }}</span>
        <div class="d-flex align-items-center gap-2">
            <img :src="props.ImgSource">
            <span class="statistics-sec-text">{{ props.StatisticText }}</span>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    StatisticPartClass : { type: String },
    StatisticCountText : { type: String },
    ImgSource : { type: String},
    StatisticText : { type : String}
})
</script>