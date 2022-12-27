<template>
<button class="btnlogin"  > {{ valueProps }} </button>

</template>

<script>
    export default {
        name : "ButtonLogin",
        props: {
            valueProps : String,
           
        }
    }
</script>