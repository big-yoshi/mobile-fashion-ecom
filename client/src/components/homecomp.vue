<template>
<div class="container">
  <h1>Men</h1>
  <div class="card suit">
    <img src="HOME/suit.png" alt="">
    <span style="color:white;">Suit</span>
  </div>
  <div class="card hoodie">
    <div class="rect">
      <img src="HOME/hoodie.png" alt="">
    </div>

    <span>Hoodie</span>

  </div>
  <div class="card track">
    

    <span>Track
      <br>
      Suit
    </span>
    
    <div class="rect">
      <img src="HOME/track.png" alt="">
    </div>
  </div>
</div>
</template>

<style scoped>

h1{
  font-size:36px;
}
.suit{
  background: #112943;
  height:140px;
  display: grid;
  grid-template-columns: auto auto;
  place-items:center;
  border-radius: 15px;
  margin-top: 120px;
}

.suit img{
  height:220px;
  
  position: absolute;
  align-self: end;
  justify-self: start;
}

span{
  font-size:36px;
  font-weight: bold;  

  
}
.suit span{

  position: absolute;
  align-self: center;
  right:70px;
  
}

.hoodie{
  
  height:140px;
  margin-top:140px;
  display: grid;
  grid-template-columns: auto auto;
  
}
.hoodie .rect{
  background:#E8BB36;
  height:100%;
  width:100%;
  border-radius: 15px;
  display: grid;
}
.hoodie img{
  height:260px;
  position: absolute;
  align-self: end;
  justify-self: center;
}
.hoodie span{
  position: absolute;
  align-self: center;
  right:30px;
}


.track{
  
  height:140px;
  margin-top:140px;
  display: grid;
  grid-template-columns: 50% 50%;
  position: relative;
  
}
.track .rect{
  background:#B8A492;
  height:100%;
  width:100%;
  border-radius: 15px;
  display: grid;
  
  align-self: center;
  justify-self: end;
}
.track img{
  height:200px;
  position: absolute;
  align-self: end;
  justify-self: center;
}
.track span{
  
  align-self: center;
  justify-self: start;
  
  
}


</style>
<script>
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin);


export default {
  name: "HomeCon",
  methods:{

  },
  mounted: function(){
    gsap.from('.card',{opacity:0,duration:2})
  }

};
</script>


