<template>
    <div class="text-center">
      <h2>Approval And Affiliation</h2>
     
    </div>
  <div class="slider">
      <div class="slide-track">
        <div class="slide">
           <img src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="">
         </div>
         <div class="slide">
           <img src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="">
         </div>
         <div class="slide">
           <img src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="">
         </div>
         <div class="slide">
           <img src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="">
         </div>
          <div class="slide">
           <img src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="">
         </div>
         <div class="slide">
           <img src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="">
         </div>
         <div class="slide">
           <img src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="">
         </div>
         <div class="slide">
           <img src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="">
         </div>
         <div class="slide">
           <img src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="">
         </div>
         <div class="slide">
           <img src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="">
         </div>
         <div class="slide">
           <img src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="">
         </div>
         <div class="slide">
           <img src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="">
         </div>
         <div class="slide">
           <img src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="">
         </div>
         <div class="slide">
           <img src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="">
         </div>
      </div>
  </div>
</template>
<script>
</script>
<style>
body{
  align-items: center;
  justify-content: center;
}
h2 {
    font-size: 40px;
    margin-bottom: 20px;
    font-weight: 20px;
  }
  
  .text-center p {
    padding-top: 10px;
    padding-bottom: 30px;
    font-size: 20px;
  }
  
@keyframes scroll{
  0%{
      transform:translateX(0);
  }
  100%{
      transform: translateX(calc(-250px*7));
  }
}
.slider{
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: auto;
}
.slider .slide-track{
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px*14);
}
.slider .slider{
  height: 100px;
  width: 250px;
}
</style>