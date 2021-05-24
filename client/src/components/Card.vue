<template>

    <div class="content">
        <div class="bg-img" v-bind:style="{ 'background-image': 'url(' + Link + ')' }">
            <div class="like-btn-container">
                <img src="like.svg" alt="">
            </div>
            
        </div>
        <h1>
            <Details>{{Title}}</Details>
            
        </h1>

    </div>
    
</template>

<style scoped>
.content{
    height: 200px;
    box-shadow: 0px 8px 24px rgba(0, 29, 61, 0.1);
    border-radius: 10px;
    width:144px;
    height: 199px;
    padding-top:2px;
    display: grid;
    place-content: center;
    position: relative;
    
}
/*
.content::after{
    content: "";
    position: absolute;
    height: 0%;
    width: 100%;
    background:rgba(0, 0,0,0.8);
    border-radius: 10px;
    align-self: end;
    transition: all 0.5s ease-in-out;
}
*/

.content:hover::after{
    height: 100%;
}

.bg-img{
    
    background-position: center;
    background-size: cover;
    width: 122px;
    height: 149px;
    border-radius:10px;
    display: grid;
    position: relative;
}
h1{
    
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    text-align: left;
    color: #001D3D;
    cursor: pointer;
}

.like-btn-container{
    background:white;
    width: 19px;
    height: 19px;
    border-radius: 5px;
    display: grid;
    place-items: center;
    position: absolute;
    align-self: start;
    justify-self: end;
    margin: 6px;
    cursor: pointer;
}
</style>

<script>

import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin);

export default {
    name:"Card",
    
    props:{
        Title: String,
        Link: String
    },
    setup() {
        
    },
}
</script>