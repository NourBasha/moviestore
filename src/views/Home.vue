<template>
  <div class="home">
      <div id="carousel-id" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item carousel-one active">
    </div>
    <div class="carousel-item carousel-two">
    </div>
    <div class="carousel-item carousel-three">
    </div>
  </div>
</div>

  </div>
</template>

<script>


export default {
  name: "Home",
  components: {
   
  }
};

</script>

<style lang="scss" scoped>

  .home {
    .carousel-item {
          background: no-repeat center center scroll;
      background-size: cover;
      -webkit-background-size: cover ;
      -moz-background-size: cover ;
      -o-background-size: cover ;
    }
.slider .carousel-one {
    background-image: url("../imgs/slider01.jpg");
     
  }
  .slider .carousel-two {
    background-image: url("../imgs/slider02.jpg");

  }
  .slider .carousel-three {
    background-image: url("../imgs/slider03.jpg");

  } 
  }

</style>