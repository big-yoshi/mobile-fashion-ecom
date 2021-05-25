<template>
    <div class="view">
        <div class="img-bg">
            <div class="overlay">
                <div class="upper-shadow"></div>
                <div class="bottom-shadow"></div>
            </div>
        </div>


        <div class="info">
            <div class="header"><h1>Grey Suit</h1> <span>$ 79.99</span></div>
            <div class="middle">
                <span>Size</span>
                <div class="same-row">
                    <div class="size-cont">
                    
                    <div class="sizes">
                        <span>S</span>
                        <span>M</span>
                        <span>L</span>
                        <span>XL</span>
                    </div>
                </div>
                <div class="colors">
                    <div class="current-color">
                        <div class="color-cont"></div>
                        <div class="dropdown"><img src="dropdown.svg" alt=""></div>
                    </div>
                    <div class="colors-list">

                    </div>
                </div>

                </div>
            </div>
            <div class="bottom">
                <button>Order</button>

                <div class="heartbox">
                    <img src="like_S.svg" alt="">
                </div>
            </div>

        </div>


    </div>
</template>

<style scoped>

.view{
    height: 100%;
    width: 100%;
    max-width: 100%;
    padding:0;
    margin: 0;
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    
    
}

.img-bg{
    height: 70%;
    width: 100%;
    background-image: url('https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&h=650&w=940');
    background-position: center;
    background-size: cover;
    
}

.info{
    
    
    height: 230px;
    padding:28px;
    
    bottom: 100px;
    
}
h1{
    margin: 0;
    
}

.middle span{
    font-size: 17px;
    color: #4D6177;
}
.info .header{
    
    height: auto;
    display: grid;
    width: 100%;
    grid-template-columns: auto auto;
    place-items: center;
    justify-content: space-between;
    align-content: space-between;
    
    font-size: 14px;
}

.info .middle{
    
    height: auto;
    text-align: left;
    width: 100%;
    margin-top: 25px;
}

.info .middle .same-row{
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-content: space-between;
}

.middle .size-cont{
    
    display: grid;
    place-items: start;
    grid-gap: 5px;
}
.middle .sizes{
    display: grid;
    grid-auto-flow: column dense;
    grid-gap: 15px;
}
.middle .sizes span{
    border-radius: 5px;
    display: grid;
    place-items: center;
    height: 33px;
    width: 33px;
    background:#F0F0F0;
    font-size: 14px;
    font-weight: 200;
    
}

.middle .colors{
    
    width: 64px;
    height: 33px;
    border-radius: 6px;
}
.middle .colors .current-color{
    height: 100%;   
    width: 100%;
    background:#EFEFEF;
    border-radius: 3px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    place-items: center;
}

.middle .colors .current-color .color-cont{
    background: #001D3D;
    height: 23px;   
    width: 35px;
    border-radius: 3px;
}
.middle .colors .current-color{
    
}

.info .bottom{
    margin-top: 25px;
    
    height: auto;
    display: grid;
    width: 100%;
    grid-template-columns: auto auto;
    place-items: center;
    justify-content: space-between;
    align-content: space-between;
}

.info .bottom button{
    background: #001D3D;
    color: white;
    border:none;
    border-radius:6px;
    height: 44px;
    width: 176px;
}

.info .bottom .heartbox{
    width: 64px;
    height: 44px;
    background: #FFFFFF;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.09);
    border-radius: 5px;
    display: grid;
    place-items: center;
}

.info .bottom .heartbox img{
    height: 16px;
}

</style>

<script>
export default {
    name:"Expand"
    
}
</script>