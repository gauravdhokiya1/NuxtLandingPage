<template>
    <main>
        <section class="hero-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-9">
                        <!-- display on large scrn only -->
                        <div class="Hero-Sec-Heading-for-large">
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
                        <!-- display on small scrn only  -->
                        <div class="Hero-Sec-Heading-for-mobile">
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
                        <div class="d-flex Sucsessed-clients-part Sucssesed-clients-part-for-large">
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
                        <!-- display on small scrn only  -->
                        <div
                            class="d-flex flex-column text-center Sucsessed-clients-part Sucssesed-clients-part-for-mobile">
                            <div>
                                <img src="../assets/images/client-images.svg" class="client-images" alt="client images">
                            </div>
                            <div class="d-flex justify-content-center">
                                <span class="hero-sec-span1">3.2m</span>
                                <span class="hero-sec-span2">Sucsess clients</span>
                            </div>
                            <div>
                                <PrimaryButton buttontext="Get Started Now" class="button-mobile" />

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
        <section class="financial-services-section">
            <div class="container">
                <h1 class="heading heading-mobile financial-srvc-head">
                    We're here to assist you in creating, managing</h1>
                <div class="row assist-sec-first-row">
                    <div class="col-md-5 financial-services">
                        <!-- <div class="financial-part">
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
                        </div> -->
                        <FinancialPart HeadingText="Investment Fund" IconSrc="/_nuxt/assets/images/invest-fund-icon.svg"
                            FSDdesc="FramerBite delivers the essential components to build a
                                polished and professional website for your SaaS business."
                            InvestInfoClass="investment-info" TitleClass="title" TitleText="Entertainment"
                            HeadText="R2500.00" HeadingClass="head" description="desc"
                            DescriptionText="You have spent more than this month in comparision to March 2020."
                            percentage="percentage" PercentText="+ 9.2%" />
                    </div>
                    <div class="col-md mt-24 financial-services">
                        <!-- <div class="financial-part">
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
                        </div> -->
                        <FinancialPart HeadingText="Investment Fund" IconSrc="/_nuxt/assets/images/invest-fund-icon.svg"
                            FSDdesc="FramerBite offers the essential building blocks for
                                developing a sophisticated website for your SaaS, a well-established fact recognized by
                                numerous desktop publishing packages and web page editors."
                            GraphImgPart="d-flex justify-content-evenly graph-imgs-margin"
                            GraphImg1Src="/_nuxt/assets/images/graph-img-1.svg"
                            GraphImg2Src="/_nuxt/assets/images/graph-img-2.svg" GraphImg1SrcClass="img-fluid"
                            GraphImg2SrcClass="hide-revenue-graph-onsm" />
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
                        <PrimaryButton buttontext="More About us" class="button-custom button-mobile" />
                    </div>
                    <div class="col-md-6 d-flex">
                        <img src="../assets/images/about-us-img.svg" alt="about-us-img" class="img-fluid">
                    </div>
                </div>
            </div>
        </section>
        <section class="testimonial-section">
            <div class="container">
                <div class="row p-61">
                    <div class="col-md-4">
                        <div class=" d-flex flex-column gap-20 testimonial-cards">
                            <div class="d-flex align-items-center testimonial-card active background-gray "
                                data-tab="founder">
                                <img src="../assets/images/FOUNDER.svg" alt="FOUNDER">
                                <div class="d-flex flex-column">
                                    <span class="color-black name">Catherine Bennett</span>
                                    <span class="color-light-black role">Founder, Creative</span>
                                </div>
                            </div>
                            <div class="d-flex align-items-center testimonial-card" data-tab="designer">
                                <img src="../assets/images/DESIGNER.svg" alt="DESIGNER">
                                <div class="d-flex flex-column">
                                    <span class="color-black name">Tony Danza</span>
                                    <span class="color-light-black role">Designer, Creative</span>
                                </div>
                            </div>
                            <div class="d-flex align-items-center testimonial-card" data-tab="aigc">
                                <img src="../assets/images/AICG.svg" alt="AICG">
                                <div class="d-flex flex-column">
                                    <span class="color-black name">Mike Torello</span>
                                    <span class="color-light-black role">AIGC, Creative</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 review" id="founder">
                        <div class="d-flex justify-content-between commas">
                            <img src="../assets/images/double-inverted-comma-top.svg" class="comma-1">
                            <img src="../assets/images/double-inverted-comma-bottom.svg" class="comma-2">
                        </div>
                        <h1 class="heading-sm color-black testimonial-desc heading-mobile-sm">Initially doubtful, the
                            outcome surpassed all my anticipations. The powerful analytics and reporting features
                            offered crucial perspectives on our business metrics, <span class="color-light-black">enabling
                                us to implement informed</span></h1>
                    </div>
                    <div class="col-md-8 review" id="designer">
                        <div style="height: 70px;"></div>
                        <h1 class="heading-sm color-black testimonial-desc heading-mobile-sm">Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Debitis recusandae minima quae qui soluta quas voluptatibus,
                            nemo earum temporibus ipsa odit quaerat. Id laboriosam ducimus praesentium magnam? Enim,
                            optio rerum.</h1>
                    </div>
                    <div class="col-md-8 review" id="aigc">
                        <div style="height: 70px;"></div>
                        <h1 class="heading-sm color-black testimonial-desc heading-mobile-sm">Neque possimus labore repellat
                            maxime quam nulla reiciendis itaque nisi ullam distinctio! Ea dolorum enim eveniet
                            laudantium?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident corrupti
                            reprehenderit asperiores? Corrupti, cum fugit!</h1>
                    </div>
                </div>
            </div>
        </section>
        <section class="statistics-section">
            <div class="container">
                <div class="row p-48 gap-63 gap-66-mob">
                    <Statistics StatisticPartClass="col-md d-flex flex-column align-items-center p-unset"
                        StatisticCountText="300+" ImgSource="/_nuxt/assets/images/partner-icon.svg"
                        StatisticText="Partner with us" />
                    <Statistics StatisticPartClass="col-md d-flex flex-column align-items-center m-top-on-sm p-unset"
                        StatisticCountText="$3.2b+" ImgSource="/_nuxt/assets/images/money-icon.svg"
                        StatisticText="Cumulative trending" />
                    <Statistics StatisticPartClass="col-md d-flex flex-column align-items-center m-top-on-sm p-unset"
                        StatisticCountText="860k" ImgSource="/_nuxt/assets/images/succes-prj-icon.svg"
                        StatisticText="Successful projects" />
                    <Statistics StatisticPartClass="col-md d-flex flex-column align-items-center m-top-on-sm p-unset"
                        StatisticCountText="1.6%" ImgSource="/_nuxt/assets/images/intrest-rate-icon.svg"
                        StatisticText="Low interest rate" />
                </div>
            </div>
        </section>
        <!-- <section class="xb-innovation-section">
            <div class="container">
                <div class="row d-flex align-items-center p-48 pt-27-mob pb-unset-mob">
                    <div class="col-md">
                        <img src="../assets/images/xb-inovation.svg" class="img-fluid">
                    </div>
                    <div class="col-md xb-inno-sec-content">
                        <h1 class="heading heading-mobile">Pave your path to triumph with XB innovation.</h1>
                        <p class="description description-mobile xb-inno-sec-para max-width">X equips you with the
                            essential tools to craft
                            a genuinely professional SaaS website.</p>
                        <div class="d-flex flex-column lists pt-64">
                            <div class="d-flex g-14">
                                <img src="../assets/images/right.svg">
                                <span class="list-text">Effortless Browsing</span>
                            </div>
                            <div class="d-flex g-14">
                                <img src="../assets/images/right.svg">
                                <span class="list-text">Secure Top 5% Industry Experts for Your Project</span>
                            </div>
                            <div class="d-flex g-14">
                                <img src="../assets/images/right.svg">
                                <span class="list-text">Secure Transaction Platform</span>
                            </div>
                        </div>
                        <PrimaryButton buttontext="More About Us" class="button-mobile more-about-us-btn" />
                    </div>
                </div>
            </div>
        </section> -->
        <ImageAndContent SectionClass="xb-innovation-section"
            RowClasses="d-flex align-items-center p-48 pt-27-mob pb-unset-mob" Colmd_first="col-md"
            Colmd_first_img="/_nuxt/assets/images/xb-inovation.svg" Colmd_second="col-md xb-inno-sec-content"
            HeadingText="Pave your path to triumph with XB innovation."
            DescriptionClasses="description description-mobile xb-inno-sec-para max-width"
            DescriptionText="X equips you with the essential tools to craft a genuinely professional SaaS website."
            lists="d-flex flex-column lists pt-64" list_item_imgSrc="/_nuxt/assets/images/right.svg"
            ListItem1Text="Effortless Browsing" ListItem2Text="Secure Top 5% Industry Experts for Your Project"
            ListItem3Text="Secure Transaction Platform" />
        <!-- <section class="bg-color download-our-app-section">
            <div class="container">
                <div class="row p-95">
                    <div class="col-md-6 d-flex align-items-end iphone-img">
                        <img src="../assets/images/iphone.svg" class="img-fluid">
                    </div>
                    <div class="col-md-6 download-our-app-content">
                        <h1 class="heading heading-mobile">Download our mobile app</h1>
                        <p class="description description-mobile pt-32 max-width pt-32-mob">X provides you with the
                            essential toolkit to develop a
                            genuinely polished website</p>
                        <div class="d-flex flex-column pt-32 lists">
                            <div class="d-flex g-14">
                                <img src="../assets/images/right.svg">
                                <span class="list-text">Effortless Browsing</span>
                            </div>
                            <div class="d-flex g-14">
                                <img src="../assets/images/right.svg">
                                <span class="list-text">Secure Top 5% Industry Experts for Your Project</span>
                            </div>
                            <div class="d-flex g-14">
                                <img src="../assets/images/right.svg">
                                <span class="list-text">WeChat & live chat</span>
                            </div>
                        </div>
                        <div class="d-flex g-20 p-imgs pt-34-mob justify-content-center">
                            <img src="../assets/images/download-on-app-store.svg" class="stores-img">
                            <img src="../assets/images/download-on-playstore.svg" class="stores-img">
                        </div>
                    </div>
                </div>
            </div>
        </section> -->
        <ImageAndContent SectionClass="bg-color download-our-app-section" RowClasses="p-95"
            Colmd_first="col-md-6 d-flex align-items-end iphone-img" Colmd_first_img="/_nuxt/assets/images/iphone.svg"
            Colmd_second="col-md-6 download-our-app-content" HeadingText="Download our mobile app"
            DescriptionClasses="description description-mobile pt-32 max-width pt-32-mob"
            DescriptionText="X provides you with the essential toolkit to develop a genuinely polished website"
            lists="d-flex flex-column pt-32 lists" list_item_imgSrc="/_nuxt/assets/images/right.svg"
            ListItem1Text="Effortless Browsing" ListItem2Text="Secure Top 5% Industry Experts for Your Project"
            ListItem3Text="WeChat & live chat" StoreImgPart="d-flex g-20 p-imgs pt-34-mob justify-content-center"
            AppStore="/_nuxt/assets/images/download-on-app-store.svg"
            PlayStore="/_nuxt/assets/images/download-on-playstore.svg" />
        <section class="accelerate-business-growth-section">
            <div class="d-flex flex-column align-items-center p-abgs">
                <h1 class="heading heading-mobile">Accelerate Your Business Growth</h1>
                <p class="custom-description description-mobile accelerate-desc text-center abgs-para">FramerBite
                    supplies the key
                    components for assembling a top-tier website tailored to your SaaS needs.</p>
                <form class="input-field">
                    <input type="email" placeholder="Enter Your Email" class="form-control input">
                    <button type="submit" class="btn button email-btn">Email Me</button>
                </form>
            </div>
        </section>
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="d-flex flex-column align-items-start">
                            <!-- <img src="./images/Logo.svg" class="img-fluid logo"> -->
                            <a class="footer-logo d-flex align-items-center" href="#">
                                <img src="../assets/images/logo-icon.svg" alt="Logo">
                                Logoipsum
                            </a>
                            <div class="footer-desc">
                                <p class="mb-0 description-mobile">XB gives you the blocks</p>
                                <p class="mb-0 description-mobile">needed to create a truly professional</p>
                                <p class="mb-0 description-mobile">website for your SaaS.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2 d-flex flex-column g-20 pt-52-mob">
                        <span class="color-mid-black">Solutions</span>
                        <span>Freelancer</span>
                        <span>Data Analytics</span>
                        <span>Small Business</span>
                    </div>
                    <div class="col-md-2 d-flex flex-column g-20 pt-46-mob">
                        <span class="color-mid-black">Company</span>
                        <span>About</span>
                        <span>Career</span>
                        <span>Contact</span>
                    </div>
                    <div class="col-md-2 d-flex flex-column g-20 pt-46-mob">
                        <span class="color-mid-black">Resource</span>
                        <span>Customers</span>
                        <span>Strategic Finance</span>
                        <span>Ebooks & Guides</span>
                    </div>
                    <div class="col-md-2 d-flex flex-column g-20 pt-46-mob">
                        <span class="color-mid-black">Features</span>
                        <span>Freelancer</span>
                        <span>Data Analytics</span>
                        <span>Small Business</span>
                    </div>
                </div>
                <p class="color-light-black mt-56 mb-0 copyright-text">Copyright © 2023 All Rights Reserved
                    by XB</p>
            </div>
        </footer>
    </main>
</template>

<script setup>
definePageMeta({
    layout: "navbar"
})
const screenwidth = ref()
onMounted(() => {
    screenwidth.value = window.innerWidth

    // navbar behaviour change
    window.addEventListener("scroll", function () {
        let nav = document.querySelector("nav");
        if (window.scrollY > 1) {
            nav.classList.add("navbar-bg");
        } else {
            nav.classList.remove("navbar-bg");
        }
    });

    // For Testimonials Tabs 
    document.querySelectorAll('.review').forEach(function (element) {
        element.classList.add('d-none');
    });
    document.getElementById('founder').classList.remove('d-none');

    document.querySelectorAll('.testimonial-card').forEach(function (element) {
        element.addEventListener('click', function () {
            document.querySelectorAll('.testimonial-card').forEach(function (card) {
                card.classList.remove('active');
                card.classList.remove('background-gray');
            });
            document.querySelectorAll('.review').forEach(function (review) {
                review.classList.add('d-none');
            });
            var tab = this.getAttribute('data-tab');
            this.classList.add('active');
            this.classList.add('background-gray');
            document.getElementById(tab).classList.remove('d-none');
        });
    });
})
</script>
