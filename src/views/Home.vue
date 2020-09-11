<template>
  <div class="home">
    <!--  start of carousel -->
    <div id="carousel-id" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carousel-id" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-id" data-slide-to="1"></li>
        <li data-target="#carousel-id" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item carousel-one active">
          <img src="../imgs/slider01.jpg" alt="" />
        </div>
        <div class="carousel-item carousel-two">
          <img src="../imgs/slider02.jpg" alt="" />
        </div>
        <div class="carousel-item carousel-three">
          <img src="../imgs/slider03.jpg" alt="" />
        </div>
      </div>
    </div>
    <!--  end of carousel -->

    <!--  start of latest -->

    <div class="latest">
      <div class="container-fluid">
        <h2>Latest Movies</h2>

        <div class="row">
          <div class="col-12 col-sm-4"> <MovieCard/> </div>
        </div>
      </div>
    </div>

    <!--  end of latest -->
  </div>
</template>

<script>
import MovieCard from "../components/cards/MovieCard";

export default {
  name: "Home",
  data() {
    return {
      navHeight: 63,
    };
  },

  components: {
    MovieCard,
  },
  mounted: function() {
    this.$nextTick(function() {
      var w = window.innerHeight;
      var el = document.getElementsByClassName("carousel-inner")[0];

      el.style.height = w - this.navHeight + "px";

      window.addEventListener("resize", this.adjustHeight);
    });
  },
  methods: {
    adjustHeight() {
      var w = window.innerHeight;
      var el = document.getElementsByClassName("carousel-inner")[0];
      el.style.height = w - this.navHeight + "px";
    },
  },
};
</script>

<style lang="scss" scoped></style>
