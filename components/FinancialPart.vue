<template>
    <div class="financial-part"> 
        <div class="d-flex justify-content-between">
            <h3 class="financial-service-title">{{ props.HeadingText }}</h3>
            <img :src="props.IconSrc"  alt="icon" class="financial-service-icon">
        </div>
        <p class="financial-service-description">{{ props.FSDdesc }}</p>
        <div :class="props.InvestInfoClass" v-if="props.InvestInfoClass">
            <div>
                <span :class="props.TitleClass">{{ props.TitleText }}</span>
                <div>
                    <span :class="props.HeadingClass">{{ props.HeadText }}</span>
                    <span :class="props.percentage">{{props.PercentText}}</span>
                </div>
                <p :class="props.description">{{ props.DescriptionText }}</p>
            </div>
        </div>
        <div :class="props.GraphImgPart" v-if="props.GraphImgPart">
            <img :src="props.GraphImg1Src" alt="graph-img" :class="props.GraphImg1SrcClass">
            <img :src="props.GraphImg2Src" alt="graph-img" :class="props.GraphImg2SrcClass" v-if="scrnwidth >=769">
        </div>
    </div>
</template>
<script setup>
const scrnwidth = ref()
onMounted(() => {
  scrnwidth.value = window.innerWidth
})
const props = defineProps({
    HeadingText : { type : String},
    IconSrc : { type : String},
    FSDdesc : { type : String},

    InvestInfoClass : { type : String},
    TitleClass : { type : String},
    TitleText : { type : String},
    HeadText : { type : String},
    HeadingClass : { type : String},
    description : { type : String},
    DescriptionText : { type : String},
    percentage : { type : String},
    PercentText : { type : String},

    GraphImgPart : { type : String},
    GraphImg1Src : { type : String},
    GraphImg2Src : { type : String},
    GraphImg1SrcClass : { type : String},
    GraphImg2SrcClass : { type : String},

})
</script>