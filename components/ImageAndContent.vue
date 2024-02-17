<template>
    <div :class="props.SectionClass">
        <div class="container">
            <div class="row" :class="props.RowClasses">
                <div :class="props.Colmd_first">
                    <img :src="props.Colmd_first_img"  class="img-fluid">
                </div>
                <div :class="props.Colmd_second">
                    <h1 class="heading heading-mobile">{{ props.HeadingText }}</h1>
                    <p :class="props.DescriptionClasses">{{ props.DescriptionText }}</p>
                    <div :class="props.lists">
                        <div class="d-flex g-14">
                            <img :src="props.list_item_imgSrc">
                            <p class="list-text">{{ props.ListItem1Text }}</p>
                        </div>
                        <div class="d-flex g-14">
                            <img :src="props.list_item_imgSrc">
                            <p class="list-text">{{props.ListItem2Text}}</p>
                        </div>
                        <div class="d-flex g-14">
                            <img :src="props.list_item_imgSrc">
                            <p class="list-text">{{props.ListItem3Text}}</p>
                        </div>
                    </div>
                    <PrimaryButton v-if="!props.StoreImgPart" buttontext="More About Us" class="button-mobile more-about-us-btn"/>
                    <div :class="props.StoreImgPart">
                        <img :src="props.AppStore"  class="stores-img">
                        <img :src="props.PlayStore"  class="stores-img">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    SectionClass : { type : String},
    RowClasses : { type : String},

    Colmd_first : { type : String},
    Colmd_first_img : { type : String},

    Colmd_second : { type : String},
    HeadingText : { type : String},
    DescriptionClasses : { type : String},
    DescriptionText : { type : String},
    lists : { type : String},

    list_item_imgSrc : { type : String},
    ListItem1Text : { type : String},
    ListItem2Text : { type : String},
    ListItem3Text : { type : String},

    StoreImgPart : { type : String},
    AppStore : { type : String},
    PlayStore : { type : String},

})
</script>