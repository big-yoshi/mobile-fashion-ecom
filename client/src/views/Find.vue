<template>
    <div class="search-page">
        <h1>Search</h1>
        <div class="search-section">
            <div class="search-container">
                <img src="search.svg" alt="" class="search-icon">
            </div>
            <input type="text" placeholder="Find your style">
            <div class="filter-btn">
                <div class="filter-container" >
                    <img src="filter.svg" alt="" class="filter-icon" v-on:click="showFilter()">
                </div>
            </div>
            
            <div class="filterMenu">

                    <span id="close" v-on:click="closeFilter()">&#10006;</span>
                    <div class="lists">
                        <h3>
                            Gender
                        </h3>
                        <div class="gender">
                            <span @click="updateFilters('gender','male')" >Male</span>
                            <span @click="updateFilters('gender','female')">Female</span>
                            <span @click="updateFilters('gender','all')">All</span>
                        </div>
                        <h3>
                            Type
                        </h3>
                        <div class="type">
                            <span @click="updateFilters('type','top')">Top</span>
                            <span @click="updateFilters('type','jeans')">Jeans</span>
                            <span @click="updateFilters('type','shirt')">Shirt</span>
                            <span @click="updateFilters('type','dress')">Dress</span>
                            <span @click="updateFilters('type','all')">All</span>
                        </div>
                        <h3>
                            Season
                        </h3>
                        <div class="season">
                            <span @click="updateFilters('season','winter')">Winter</span>
                            <span @click="updateFilters('season','summer')">Summer</span>
                            <span @click="updateFilters('season','autumn')">Autumn</span>
                            <span @click="updateFilters('season','spring')">Spring</span>
                            <span @click="updateFilters('season','all')">All</span>
                        </div>

                    </div>
                    

        </div>

        </div>
        
        <div class="content-container">
            <Card v-for="item in result" v-bind:key="item.id" v-bind:Title="item.Title" v-bind:Link="item.img_link"></Card>
        </div>
    </div>    
</template>

<style scoped>

.search-section{
    
    display: grid;
    grid-template-columns: 55px auto 55px;
    height: 53px;
}
.search-container{
    background: #F7F7F8;
    border-radius: 15px 0px 0 15px;
}

.search-section div{
    display: grid;
    place-items: center;
}

.filters-btn{
    position: relative;
    
}

.search-section .filterMenu{
    
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
    display: none;
    
    
}

.filterMenu .lists {
    
    width: 90%;
    display: grid;
    place-items: center;
    text-align: left;
    height:70%;
    
}


.filterMenu .lists h3{
    place-self: start;
    font-size: 24px;
}
.filterMenu .lists div{
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    
    height: 110%;
}
.filterMenu .lists span{
    display: grid;
    place-items: center;
    font-size: 14px;
    border:1.4px solid rgba(0, 29, 61, 0.45);
    font-weight:200;
    padding: 10px 24px 10px 24px;
    border-radius: 25px;
    transition: all 0.5s ease-in-out;
}
.filterMenu .lists span:hover{
    background: #001D3D;
    color: white;
    cursor: pointer;
}
.filterMenu .lists span.active{
    background: #001D3D;
    color: white;
    cursor: pointer;
}
.search-section img{

}
.search-section input{
    position: relative;
    z-index: 1;
    background: #F7F7F8;
    border:none;
    display: grid;
    place-items: center;
    -webkit-appearance: none;
    box-shadow: none;
    -moz-appearance: none;
    text-align: center;
    
}
.search-section input:focus{
    border:none;
    outline:none!important;
}

.search-section input::placeholder{
    color: rgba(0, 29, 61, 0.45);
    font-size: 14px;
    text-align: center;
    
    
}

.search-section .filter-container{
    background: #001D3D;
    border-radius: 15px;
    cursor: pointer;
    height: 100%;
    width:100%;
}

.filter-container img{
    
}

.search-section .filter-container .filter-icon{

}

.content-container{
    
    height: auto;
    display: grid;
    width: 100%;
    grid-template-columns: auto auto;
    place-content: start;
    
    margin-top: 50px;
    justify-content: space-between;
    align-content: space-between;
    grid-gap: 36px;

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
import Card from '@/components/Card.vue'
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin);
export default {
    components:{
        Card
    },
    data: function(){
        return {
            result: [
                {Title:"Grey shirt", gender:"male", type:"top" ,img_link:'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'},
                {Title: "leather jacket",gender:"female", type:'top',img_link:"https://images.pexels.com/photos/1034859/pexels-photo-1034859.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
            ],
            
            filters:{
                gender:"all",
                type: "all",
                season: "all"
            }
        }
    },
    methods:{
            showFilter: function(){
                gsap.to(".filterMenu", {opacity:1,zIndex:99,duration:0.4});
                gsap.to(".filterMenu",{display:'grid'});
            },
            closeFilter: function(){
                gsap.to(".filterMenu", {opacity:0,zIndex:-1, duration:0.3});
                gsap.to(".filterMenu",{display:'none'});
                
            },
            
            updateFilters: function(cate, val){
                this.filters[cate] = val;
            }
        },
    watch:{
            filters:{
                deep:true,
                handler(val){
                    console.log(val);
                }
            }
        }

}
</script>
