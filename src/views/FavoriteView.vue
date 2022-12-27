<template>
    <div>
        <MobileNavbarVue /> 
        <h2>Favorite Page</h2>
    </div>
</template>
    
    <script>
    import MobileNavbarVue from '../components/MobileNavbar.vue';
    export default {
        name : "FavoriteView",
        components: {
            MobileNavbarVue
        }
    }
    </script>