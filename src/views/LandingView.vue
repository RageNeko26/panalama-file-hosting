<template> 
  <div>
    <NavbarVue />
  
 <div class="container">   
<div class="jumbotron bg-white text-center " >
  
    <h1 class="display-4">Save your files securely with easy use of the App</h1>
    <p class="mt-4 lead buram">Working with your team? Or maybe you want to share with your friends and family? Access in device such as smartphone, tablet and PC</p>
    <button class="mybtn" v-on:click="goToLogin">Try it out!</button>
   
  
  </div>
</div>
</div>
</template>

<script>
import NavbarVue from '../components/Navbar.vue';



export default {
    name : "Landing",
    

    components: {
        NavbarVue
    },

  

    methods : {
      goToLogin() {
       const {$router:{push}} = this;
       const wrapper = document.getElementById('wrap-loader');
       wrapper.classList.add('loader');
       
       wrapper.addEventListener('animationend', function() {
        push('signin');
       })
      }
    }
}
</script>