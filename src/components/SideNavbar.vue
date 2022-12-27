<template> 
 <div id="sideNav" >
        <nav>
            <router-link  to="/dashboard"><img src="../assets/image/home.png" class="icon">Home</router-link>
            <router-link to="/storage"><img src="../assets/image/server.png" class="icon">Storage</router-link>
            <router-link to="/favorite"><img src="../assets/image/star.png" class="icon">Favorite</router-link>
            <router-link to="/trash"><img src="../assets/image/trash.png" class="icon">Trash</router-link>

        </nav>
    </div>

</template>

<style scoped>
#sideNav {
    height: 100vh;
    width : 70%;
    border: 1px solid rgb(224, 220, 220);
    padding-left: 5px;
    padding-right: 13px;
 
 }
 
 #sideNav nav a {
     width: 100%;
     display: block;
     padding: 15px ;
     margin-bottom: 12px;
     color: black;
     text-decoration: none;
     text-align: center;
     border-radius: 8px;
     transition: all 0.2s ease-in-out 0.1s;
 
 }
 
 #sideNav nav a:hover {
     background : #00AAFF;
     
 }
 
 .icon {
     width: 20px;
     margin: 0 12px;
 }
 
 nav a.router-link-active {
     background-color: #00AAFF;
     color: white;
 }

</style>

<script>
export default {
    name : "SideNavbar",

}
</script>