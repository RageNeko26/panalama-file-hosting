<template>
    <Navbar />
    <MobileNavbarVue />


    <div class="container">
        <div class="info_page">
            <div class="circle-loader"></div>
        </div>
    </div>
</template>

<style>
.circle-loader {
    border: 16px solid #f3f3f3;;
    border-radius: 50%;
    border-top : 16px solid #00AAFF;
    width: 110px;
    height: 110px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
}

@keyframes spin {
 0% {
    transform: rotate(0deg);
}

100% {
    transform: rotate(360deg);
}

}
</style>

<script>
import Navbar from '../components/Navbar.vue'
import MobileNavbarVue from '../components/MobileNavbar.vue';

export default {
    name : "DashboardFallback",
    components: {
        Navbar,
        MobileNavbarVue
    }
}

</script>

