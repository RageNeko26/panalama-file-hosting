<template>
    <div>
        <MobileNavbarVue /> 
        <h2>Profile Page</h2>
    </div>
</template>
    
    <script>
    import MobileNavbarVue from '../components/MobileNavbar.vue';
    export default {
        name : "ProfileView",
        components: {
            MobileNavbarVue
        }
    }
    </script>