<template>
    <div class="view">
        <div class="img-bg">
            <div class="overlay">
                <div class="upper-shadow"></div>
                <div class="bottom-shadow"></div>
            </div>
        </div>

        <div class="info">
            <div class="header"></div>
            <div class="middle"></div>
            <div class="bottom"></div>

        </div>


    </div>
</template>

<style scoped>

.views{
    height: 100%;
    width: 100%;
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

</style>

<script>
export default {
    
}
</script>