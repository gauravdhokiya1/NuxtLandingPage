<template>
    <nav class="navbar navbar-expand-lg">
        <!-- Logo -->
        <a class="navbar-brand d-flex align-items-center" href="#">
            <!-- <img src="./images/Logo.svg" alt="Logo"> -->
            <img src="../assets/images/logo-icon.svg" alt="Logo">
            Logoipsum
        </a>
        <!-- Toggler/collapsibe Button -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Navbar links -->
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav">
                <!-- Dropdown menu -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        All Pages
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Pricing</a></li>
                        <li><a class="dropdown-item" href="#">Contact</a></li>
                        <li><a class="dropdown-item" href="#">About</a></li>
                    </ul>
                </li>
                <!-- Other menu items -->
                <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
            </ul>
            <div class="d-flex nav-btns-mobile" v-if="scrnwidth <= 768">
                <button class="btn nav-btn" type="button">Sign In</button>
                <button class="btn button" type="button">Get This Template</button>
                <div class="form-check form-switch d-flex flex-column justify-content-center">
                    <input class="form-check-input darkModeToggle" type="checkbox">
                </div>
            </div>
        </div>
        <!-- Buttons -->
        <div class="d-flex nav-btns-large-scrn" v-if="scrnwidth > 769">
            <div class="form-check form-switch d-flex flex-column justify-content-center">
                <input class="form-check-input darkModeToggle" type="checkbox">
            </div>
            <button class="btn nav-btn" type="button">Sign In</button>
            <button class="btn button" type="button">Get This Template</button>
        </div>
    </nav>
    <slot/>
</template>
<script setup>
const scrnwidth = ref()
onMounted(() => {
    scrnwidth.value = window.innerWidth
})
</script>