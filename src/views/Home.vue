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
    <div class="latest" >
      <h2 class="latest-h2">Hottest Movies!</h2>
      <p class="latest-p">The most recent movies and the highest in rating</p>
      
      <div class="indicators" style="width:100%; height:100%; position:relative;">
         <span @click="changeFontAColor()"><font-awesome-icon  class="next" icon="chevron-right" size="4x"> </font-awesome-icon></span>
       <span @click="changeFontAColor()"><font-awesome-icon  class="prev" icon="chevron-left" size="4x"> </font-awesome-icon></span>
      </div>

      <div class="container">
        <div class="row card-row" style="flex-wrap:nowrap; overflow: hidden;">
          <div class="col-12 col-md-6 col-lg-4"
           v-for="movie in hottestMovies" :key="movie.id"> <!-- figure out a way to reach that key  -->
            <MovieCard :img="imagePath+movie.poster_path"
                        :title ="movie.title"
                        :overview="movie.overview"  
                        />
          </div>
        </div>
      </div>
    </div>
    <!--  end of latest -->


    <!--  start of groups -->
    <div class="groups">
      <div class="container-fluid">
        <h4 class="group-h4">Our Movies</h4>
      <div class="row first-category-row" style="margin:0; padding:0; flex-wrap:wrap;">
        <div style="margin:0; padding:0;" class="col-md-3 group-col" 
        v-for="movie in groupMovies" :key="movie.id" >
              <div class="rating" > 
               
                <span class="top-span">
                   <font-awesome-icon style="color:yellow;" class="next" icon="star" > </font-awesome-icon>
                   {{movie.vote_average}}</span><span style="font-size:15px;">\10</span> 
              </div>
              <div class="title"> <span > {{movie.title}} </span> </div>
              <div class="release_date"> <span> {{movie.release_date}} </span> </div>
              <img style="padding:0; margin:0; width:100%;" :src="imagePath + movie.poster_path" alt="">
        </div>
      </div>


    </div>
      </div>
    <!--  end of groups -->
      


    <div  class="check-categories text-center" >
            <a href="">Check Out All of Our Movies!</a> 
    </div>


    <!-- start of sign up  -->
        <div class="sign-up">
                  <div class="heading">
                  <h2> Subscribe!</h2>
                  <p>Get the latest updates on movies</p>
                  </div>
                 
          <div class="container">
              <div class="row">
                <div class="col-12 col-md-6 ml-auto   text-center text-md-right ">
                    <!-- <input class="align-middle input-email" type="text"  placeholder="Enter your E-mail"> -->

                    
                     <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">@</span>
                    </div>
                    <input type="text" class="form-control" 
                    placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1">
                  </div>

                </div>
                <div class="col-12 col-md-4  text-center text-md-left">
                    <button class="btn btn-light"> Subscribe </button>
                </div>
              </div>
          </div>
        </div>
    <!-- end of sign up  -->


    <!-- start of foooter  -->
        <div class="footer">
          <div class="container">
            <div class="row">


                  <div class="col-12 col-sm-8 col-md-8 col-lg-6 text-left footer-brand "  >
                          <a  id="brand-logo" href="#">Movie<span>store</span></a>
                          <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus nobis modi minus ipsum sequi quos nulla. Saepe accusantium voluptatum 
                            eos, ipsa iusto, cumque qui dolorem nesciunt sint dolor perferendis quasi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum praesentium illum ullam magnam aspernatur consectetur suscipit sapiente? Fugit iste,
                             voluptatum asperiores esse tenetur ex distinctio explicabo laudantium cumque consequatur voluptas. </p>
                  </div>

                  <div class="col-12 col-sm-4 col-md-4 col-lg-3 text-left  helpful-links ">
                          <h6>Helpful Links</h6>
                      <div class="row ">
                        
                          <div class="col">
                      <ul class="footer-links1">
                      <li> <a href="">About</a> </li>
                      <li> <a href="">Team</a> </li>
                      <li> <a href="">Privacy Policy</a></li>
                    </ul>
                          </div>
                           <div class="col">
                      <ul class="footer-links2">
                      <li> <a href="">FAQ</a> </li>
                      <li> <a href="">Blog</a></li>
                      <li> <a href="">Contact</a></li>
                    </ul>
                          </div>

                      </div>
                    
                  </div>
                  <div class="col-12 col-lg-3 text-left footer-address">
                      <h6>Contact Us</h6>
                     <ul >
                      <li> 2342 Sheraton St. next to hollywood avn, CA,USA </li>
                      <li> Phone: +201066608215</li>
                      <li> Email: <a href="">Nour.basha2011@gmail.com</a></li>
                    </ul>
                    
                  </div>

            </div>

          </div>
        </div>
    <!-- end of footer  -->

      <Copyright/>

  </div>
</template>

<script>
      import axios from 'axios';

import MovieCard from "../components/cards/MovieCard";
import Copyright from '../components/global/Copyright';

export default {
  name: "Home",
  data() {
    return {
      navHeight: 63,
      apiKey : '83a0145e56d35a45ba5ea0f752806cd2',
      hottestMovies : [],
      slicedOverviews : [],
      groupMovies: [ ],
        imagePath : "https://image.tmdb.org/t/p/w300",
    };
  },

  components: {
    MovieCard ,Copyright
  },
   
 async mounted() {
          //getting our hottest movies (trnding)
          const trending =  await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key='+this.apiKey);
          this.hottestMovies = trending.data.results;
            // cutting the overview string
            for (var i = 0 ; i<this.hottestMovies.length;i++){
                  this.slicedOverviews[i] = this.hottestMovies[i].overview.replace('-',' ').replace('—',' ').split(' ').slice(0,12).join(' ')+' ...';
                  this.hottestMovies[i].overview = this.slicedOverviews[i];
            }


            // getting our movie collection (popular)
             const popular =  await axios.get('https://api.themoviedb.org/3/movie/popular?api_key='+this.apiKey+'&language=en-US&page=1');
             this.groupMovies = popular.data.results;       
      

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
    } ,
    
    changeFontAColor () {
      // el.style.color = '#42b983';

      // console.log('just been clicked');
      }

  },
};
</script>

<style lang="scss" scoped>



</style>