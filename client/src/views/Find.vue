<template>
    <div >
        <h1>Search</h1>
        <div class="search-section">
            <div class="search-container">
                <img src="search.svg" alt="" class="search-icon">
            </div>
            <input type="text" placeholder="Find your style">
            <div class="filter-container">
                <img src="filter.svg" alt="" class="filter-icon">
            </div>

        </div>
        <div class="content-container">

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
}

.filter-container img{
    
}

.search-section .filter-container .filter-icon{

}

.content-container{
    background: green;
    height: auto;
    display: grid;
    width: 100%;
}
</style>

<script>
export default {
    setup() {
        
    },
}
</script>
