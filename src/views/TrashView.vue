<template>
   
    <div>
        <Navbar />
        <MobileNavbarVue />
        <div class="container">
            <div class="info_page">
                <h2>Trash Page</h2>
            </div>
        </div>
        
       
    </div>

</template>



<script>
import Navbar from '../components/Navbar.vue'
import MobileNavbarVue from '../components/MobileNavbar.vue';
export default {
    name : "TrashView",
    components: {
        MobileNavbarVue,
        Navbar
    }
}
</script>