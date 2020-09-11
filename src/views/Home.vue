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

      <h2 class="latest-h2">Hottest Movies!</h2>
      <p class="latest-p">The most recent movies and the highest in rating</p>
      <div class="indicators" style="width:100%; height:100%; position:relative;">
      <font-awesome-icon  class="next" icon="chevron-right" size="4x"> </font-awesome-icon>
      <font-awesome-icon  class="prev" icon="chevron-left" size="4x"> </font-awesome-icon>
      </div>

      <div class="container">
        <div class="row ">
          <div class="col-12 col-md-4 " v-for="item in items" :key="item.id">
            <MovieCard :imgs="imgsrc" :name="item.name" />
          </div>
        </div>
      </div>
    </div>
    <!--  end of latest -->

    <!-- <div style="width:100%; height:50px; background-color:#21262c;"></div> -->

    <!--  start of groups -->

    <div class="groups">
      <div class="container-fluid">
        <h4 class="group-h4">Comedy</h4>
      <div class="row first-category-row">
        <div class="col-12 col-sm-4 col-md-3 mb-4   mx-auto text-center " 
        v-for="movie in groupMovies" :key="movie.id">
              <GroupMovieCard :name="movie.name"
              :imgsrc2="imgsrc2" />
        </div>
      </div>

      <h4 class="group-h4">Drama</h4>
      <div class="row second-category-row">
        <div class="col-12 col-sm-4 col-md-3 mb-4 mx-auto text-center" 
        v-for="movie in groupMovies" :key="movie.id">
              <GroupMovieCard :name="movie.name"
              :imgsrc2="imgsrc2" />
        </div>
      </div>

      <h4 class="group-h4">Action</h4>
      <div class="row third-category-row">
        <div class="col-12 col-sm-4 col-md-3 mb-4 mx-auto text-center"
         v-for="movie in groupMovies" :key="movie.id">
              <GroupMovieCard :name="movie.name"
              :imgsrc2="imgsrc2" />

        </div>
      </div>

    </div>

      </div>
    <!--  end of groups -->
  </div>
</template>

<script>
import MovieCard from "../components/cards/MovieCard";
import GroupMovieCard from '../components/cards/GroupMovieCard'

export default {
  name: "Home",
  data() {
    return {
      navHeight: 63,
      imgsrc: "sh01",
      items: [
        { id: 1, name: "Maha" },
        { id: 2, name: "Samar" },
        { id: 3, name: "Aya" }
      ],
      groupMovies: [  { id: 1, name: "Southpaw" },
        { id: 2, name: "Titanic" },
        { id: 3, name: "The Hateful Eight" },
        { id: 4, name: "Titanic" }
        ],
        imgsrc2 : "g01"
    };
  },

  components: {
    MovieCard,GroupMovieCard
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

<style lang="scss" scoped>
    .latest {
      .next {
                position: absolute;
            top: 100px ;
            right: 10px;
            background-color: rgb(255, 46, 46);
            border-radius: 4px;
            padding: 1px 5px;
            color: #fff;
            text-align: center;
            font-weight: bold;
            }

              .prev {
            position: absolute;
             top: 100px;
            left: 10px;
            background-color: rgb(255, 46, 46);
            border-radius: 4px;
            padding: 1px 5px;
            color: #fff;
            text-align: center;
            font-weight: bold;
              
            }


}
  .groups {

       
       h4 {
        margin-left: -15px;
        margin-right: -15px;
        margin-bottom: 25px;
        padding: 10px 0 ;
        font-size: 30px;
        font-weight: bold;
        font-family:'Times New Roman', Times, serif;
        color: white;
        background-color: #21262c;   
        
        }

        .first-category-row{
          margin-bottom: 20px;
        }
  }


</style>
