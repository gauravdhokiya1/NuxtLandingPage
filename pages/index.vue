<template>
    <main>
        <section class="hero-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-9">
                        <!-- display on lg scrn only -->
                        <div v-if="screenwidth >= 769">
                            <div class="d-flex align-items-center">
                                <h1 class="heading-lg">Intelligent</h1>
                                <img src="../assets/images/girl.svg" alt="girl-img">
                                <h1 class="heading-lg">Tools for</h1>
                            </div>
                            <div class="head-line-two d-flex align-items-center">
                                <img src="../assets/images/man.png" class="man-img" alt="man-img">
                                <h1 class="heading-lg">Savvy Businesses</h1>
                            </div>
                        </div>
                        <div v-if="screenwidth <= 768">
                            <div class="heading-mobile">Intelligent
                                <img src="../assets/images/girl.svg" class="girl-img" alt="girl-img">
                            </div>
                            <div class="d-flex head-line-two">
                                <img src="../assets/images/man.png" class="man-img" alt="man-img">
                                <div class="d-flex flex-column">
                                    <span class="heading-mobile">Tools for</span>
                                    <span class="heading-mobile hs-head-text-3">Savvy Businesses</span>
                                </div>
                            </div>
                        </div>
                        <p class="description hero-section-description description-mobile">
                            FramerBite provides the essential elements for crafting a top-tier website for your SaaS
                            platform.</p>
                        <!-- display on large screen only  -->
                        <div class="d-flex Sucsessed-clients-part" v-if="screenwidth >= 769">
                            <div>
                                <PrimaryButton buttontext="Get Started Now" />
                            </div>
                            <div class="d-flex Sucsessed-clients">
                                <div>
                                    <img src="../assets/images/client-images.svg" alt="client images">
                                </div>
                                <div class="d-flex flex-column justify-content-center">
                                    <span class="hero-sec-span1">3.2m</span>
                                    <span class="hero-sec-span2">Sucsess clients</span>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-column text-center Sucsessed-clients-part" v-if="screenwidth <= 768">
                            <div>
                                <img src="../assets/images/client-images.svg" class="client-images" alt="client images">
                            </div>
                            <div class="d-flex justify-content-center">
                                <span class="hero-sec-span1">3.2m</span>
                                <span class="hero-sec-span2">Sucsess clients</span>
                            </div>
                            <div>
                                <button class="btn button button-mobile">Get Started Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="businesses-detail-section">
            <div class="container">
                <div class="d-flex flex-column align-items-center text-center">
                    <h1 class="heading-sm color-light-black businesses-head heading-mobile-sm">
                        Join over 55,000 businesses that have achieved their goals.</h1>
                    <div class="box-shadow business-imgs-spacing-top-btm">
                        <div class="d-flex businesses-imgs">
                            <img src="../assets/images/business-1.svg" alt="businesses-img" class="business-img">
                            <img src="../assets/images/business-2.svg" alt="businesses-img" class="business-img">
                            <img src="../assets/images/business-3.svg" alt="businesses-img" class="business-img">
                            <img src="../assets/images/business-4.svg" alt="businesses-img" class="business-img">
                            <img src="../assets/images/business-5.svg" alt="businesses-img" class="business-img">
                            <img src="../assets/images/business-6.svg" alt="businesses-img" class="business-img">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="assisting-section">
            <div class="container">
                <h1 class="heading heading-mobile assist-sec-head">
                    We're here to assist you in creating, managing</h1>
                <div class="row assist-sec-first-row">
                    <div class="col-md-5 financial-services">
                        <div class="financial-part">
                            <div class="d-flex justify-content-between">
                                <h3 class="financial-service-title">Investment Fund</h3>
                                <img src="../assets/images/invest-fund-icon.svg" alt="icon" class="financial-service-icon">
                            </div>
                            <p class="financial-service-description">FramerBite delivers the essential components to build a
                                polished and professional website for your SaaS business.</p>
                            <div class="investment-info">
                                <div>
                                    <span class="color-black font-weight-500">Entertainment</span>
                                    <div class="d-flex">
                                        <span class="color-black font-weight-500 font-size-24">R2500.00</span>
                                        <span class="color-red font-weight-500 pt-2 ms-2">+ 9.2%</span>
                                    </div>
                                    <p class="color-light-black font-weight-500 investment-info-para">You have spent more
                                        than this month in comparision to March 2020.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md mt-24 financial-services">
                        <div class="financial-part">
                            <div class="d-flex justify-content-between">
                                <h3 class="financial-service-title">Retirement Plan</h3>
                                <img src="../assets/images/retire-plan-icon.svg" alt="icon" class="financial-service-icon">
                            </div>
                            <p class="financial-service-description">FramerBite offers the essential building blocks for
                                developing a sophisticated website for your SaaS, a well-established fact recognized by
                                numerous desktop publishing packages and web page editors.</p>
                            <div class="d-flex justify-content-evenly graph-imgs-margin ">
                                <img src="../assets/images/graph-img-1.svg" alt="graph-img" class="img-fluid">
                                <img src="../assets/images/graph-img-2.svg" alt="graph-img" class="hide-revenue-graph-onsm"
                                    :class="{ 'd-none': screenwidth <= 768 }">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mastercard-part financial-services">
                    <div class="col-md">
                        <div class="financial-part">
                            <div class="d-flex flex-column align-items-start">
                                <img src="../assets/images/mastercard-icon.svg" alt="mastercard-icon" height="48"
                                    class="assist-sec-card-icons" style="margin-bottom: 14px;">
                                <h3 class="financial-service-title mt-40 max-width-394 max-width-160-mob pb-24">Global Visa
                                    and
                                    Mastercard with Multi-Currency Support</h3>
                                <p class="financial-service-description mt-26 max-width-394">FramerBite provides the
                                    necessary
                                    elements for crafting
                                    a
                                    professional-grade website for your SaaS, acknowledged by various desktop publishing
                                    tools</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md d-flex align-items-end justify-content-end">
                        <div class="financial-part">
                            <img src="../assets/images/debit-card-img.svg" alt="debit-card-img" class="mt-4 img-fluid">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="about-us-section">
            <div class="container">
                <div class="row about-us-part">
                    <div class="col-md-6 about-us-content">
                        <span class="color-red sub-heading">ABOUT US</span>
                        <h1 class="heading about-us-heading heading-mobile">Embark on Your Digital </h1>
                        <p class="description about-us-para description-mobile">FramerBite offers the key components to
                            build a
                            professional-grade website for your SaaS, a fact well-known to readers familiar with the
                            industry.</p>
                        <button class="btn button-custom button-mobile">More About Us</button>
                    </div>
                    <div class="col-md-6 d-flex">
                        <img src="../assets/images/about-us-img.svg" alt="about-us-img" class="img-fluid">
                    </div>
                </div>
            </div>
        </section>
        <section class="client-review-section">
            <div class="container">
                <div class="row p-61">
                    <div class="col-md-4 d-flex flex-column gap-20 thought-cards">
                        <div class="d-flex align-items-center thought-card active background-gray " data-tab="founder">
                            <img src="../assets/images/FOUNDER.svg" alt="FOUNDER">
                            <div class="d-flex flex-column">
                                <span class="color-black name">Catherine Bennett</span>
                                <span class="color-light-black role">Founder, Creative</span>
                            </div>
                        </div>
                        <div class="d-flex align-items-center thought-card" data-tab="designer">
                            <img src="../assets/images/DESIGNER.svg" alt="DESIGNER">
                            <div class="d-flex flex-column">
                                <span class="color-black name">Tony Danza</span>
                                <span class="color-light-black role">Designer, Creative</span>
                            </div>
                        </div>
                        <div class="d-flex align-items-center thought-card" data-tab="aigc">
                            <img src="../assets/images/AICG.svg" alt="AICG">
                            <div class="d-flex flex-column">
                                <span class="color-black name">Mike Torello</span>
                                <span class="color-light-black role">AIGC, Creative</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 review" id="founder">
                        <div class="d-flex justify-content-between commas">
                            <img src="../assets/images/double-inverted-comma-top.svg" class="comma-1">
                            <img src="../assets/images/double-inverted-comma-bottom.svg" class="comma-2">
                        </div>
                        <h1 class="heading-sm color-black thought-desc headingsm-sm-scrn">Initially doubtful, the
                            outcome surpassed all my anticipations. The powerful analytics and reporting features
                            offered crucial perspectives on our business metrics, <span class="color-light-black">enabling
                                us to implement informed</span></h1>
                    </div>
                    <!-- <div class="col-md-8 review" id="designer">
                        <div style="height: 70px;"></div>
                        <h1 class="heading-sm color-black thought-desc headingsm-sm-scrn">Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Debitis recusandae minima quae qui soluta quas voluptatibus,
                            nemo earum temporibus ipsa odit quaerat. Id laboriosam ducimus praesentium magnam? Enim,
                            optio rerum.</h1>
                    </div> -->
                    <!-- <div class="col-md-8 review" id="aigc">
                        <div style="height: 70px;"></div>
                        <h1 class="heading-sm color-black thought-desc headingsm-sm-scrn">Neque possimus labore repellat
                            maxime quam nulla reiciendis itaque nisi ullam distinctio! Ea dolorum enim eveniet
                            laudantium?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident corrupti
                            reprehenderit asperiores? Corrupti, cum fugit!</h1>
                    </div> -->
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
definePageMeta({
    layout: "navbar"
})
const screenwidth = ref()
onMounted(() => {
    screenwidth.value = window.innerWidth
})
</script>
