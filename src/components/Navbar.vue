<template>
<div class="fixed-top" id="wrapper-navbar">
    <nav class="navbar shadow-sm ">
    <div class="container">
      <router-link to="/"><img src="../assets/image/logo1.png" width="80" alt=""></router-link>
    </div>
   
  </nav>
  <div id="wrap-loader"></div>
</div>
</template>

<script>
    export default {
        name : "Navbar"
    }
</script>

<style scoped>
#wrapper-navbar {
  border-bottom: 1px solid rgb(216, 211, 211);
  background-color: white;
}

</style>

