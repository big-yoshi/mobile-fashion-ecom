<template>
    <div class="nav">
        <img src="Vector.svg" id="menu">
        <img src="search.svg" id="search">
    </div>
</template>


<style scoped>
.nav{
    display: grid;
    
    height:70px;
    display: relative;
    place-items:center;
}
#menu{
    position: absolute;
    justify-self: start;
}
#search{
    position: absolute;
    justify-self: end;
}

</style>

<script>
export default {
    name:'Navbar'

}
</script>