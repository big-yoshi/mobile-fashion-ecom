<template>
    <div class="nav">
        <div class="icons">
            <div id="menu" @click="showMenu()">
                <img src="Vector.svg">
            </div>
            
            <div id="search">
                <a href="/about">
                    <img src="search.svg">
                </a>
            </div>
            
        </div>

        <div class="fullscreen">
            <span id="close" v-on:click="closeMenu()">&#10006;</span>
            <div class="links">
                <a href=""><h1>Home</h1></a>
                <a href=""><h1>Search</h1></a>
                <a href=""><h1>Account</h1></a>
                <a href=""><h1>Setting</h1></a>

            </div>
        </div>

    </div>

</template>


<style scoped>
.nav{
    
    position: relative;
}
.nav .icons{
    display: grid;
    
    height:90px;
    
    place-items:center;
}
#menu{
    position: absolute;
    justify-self: start;
    cursor: pointer;
    
}
#search{
    position: absolute;
    justify-self: end;
}
#search a{
    cursor: pointer;    
}
.fullscreen{
    display: grid;
    place-items: center;
    background:white;
    width: 100%;
    height: 100%;
    padding:0;
    margin: 0;
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0;
    display: none;
    
}

.fullscreen a{
    
    color: black;
    display: grid;
    place-items: center;
    
    text-decoration: none;
    

}
.fullscreen a:after{
    content: "";
    border: 0px solid red;
    cursor: pointer;
    padding-left:0px;
    padding-right:0px;
    transition: all 280ms ease;

}
.fullscreen a:hover::after{
    border: 1px solid black;
	padding-left: 50%;
	padding-right: 50%;
    
}
.nav .links{
    
    height:65vh;
    display: grid;
    place-items: center;
}

#close{
    position: absolute;
    align-self: start;
    justify-self: start;
    top: 20px;
    left: 18px;
    font-size: 25px;
    cursor: pointer;
}


</style>

<script>
    import { gsap } from 'gsap';
    import { CSSPlugin } from 'gsap/CSSPlugin'
    gsap.registerPlugin(CSSPlugin);
    export default {
        name:'Navbar',
        methods:{
            showMenu: function(){
                gsap.to(".fullscreen", {opacity:1,zIndex:99,duration:0.4});
                gsap.to(".fullscreen",{display:'grid'});
            },
            closeMenu: function(){
                gsap.to(".fullscreen", {opacity:0,zIndex:-1, duration:0.3});
                gsap.to(".fullscreen",{display:'none'});
                
            }
        }

    }
</script>