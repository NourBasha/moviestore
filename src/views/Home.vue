<template>
  <div class="home">
    <!--  start of carousel -->
    <div id="carousel-id" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carousel-id" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-id" data-slide-to="1"></li>
        <li data-target="#carousel-id" data-slide-to="2"></li>
      </ol>
      <section v-if="errored_caro">
        <p>Sorry the Page can't be loaded due to some technical issues.</p>
      </section>
      <section v-else>
        <div v-if="loading_caro">
          Loading ...
        </div>
        <div class="carousel-inner" v-else>
          <div class="carousel-item carousel-one active">
            <img
              style="width:100%;  "
              :src="imagePathOriginal + AdImages[0].poster_path"
              alt=""
            />
          </div>
          <div class="carousel-item carousel-two">
            <img
              style="width:100%;"
              :src="imagePathOriginal+AdImages[1].poster_path"
              alt=""
            />
          </div>
          <div class="carousel-item carousel-three">
            <img
              style="width:100%; "
              :src="imagePathOriginal + AdImages[2].poster_path"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
    <!--  end of carousel -->

    <!--  start of latest -->
    <div class="latest">
      <h2 class="latest-h2">Hottest Movies!</h2>
      <p class="latest-p">The most recent movies and the highest in rating</p>

      <section v-if="errored_trending">
        <p>Sorry the Page can't be loaded due to some technical issues.</p>
      </section>

      <section v-else>
        <div
          class="indicators"
          style="width:100%; height:100%; position:relative;"
        >
          <span @click="swipeHottestMoviesNext()"
            ><font-awesome-icon class="next" icon="chevron-right" size="4x">
            </font-awesome-icon
          ></span>
          <span @click="swipeHottestMoviesPrev()"
            ><font-awesome-icon class="prev" icon="chevron-left" size="4x">
            </font-awesome-icon
          ></span>
        </div>
        <div v-if="loading_trending">
          Loading ...
        </div>
        <div class="container" v-else>
          <div class="row card-row" style="flex-wrap:nowrap; overflow: hidden;">
            <div
              class="card-col col-12 col-md-6 col-lg-4"
              v-for="(movie, index) in hottestMovies"
              :key="movie.id"
              v-show="hottestMoviesVisible[index]"
              name="component-fade"
              mode="out-in"
            >
              <!-- <transition name="component-fade" mode="out-in"> -->
              <MovieCard
                :img="imagePath + movie.poster_path"
                :title="movie.title"
                :overview="movie.overview"
                :rating="movie.vote_average"
                :id="movie.id"
              />
              <!-- </transition> -->
            </div>
          </div>
        </div>
      </section>
    </div>
    <!--  end of latest -->

    <!--  start of groups -->
    <div class="groups">
      <div class="container-fluid">
        <h4 class="group-h4">Our Movies</h4>

        <section v-if="errored_groups">
          <p>Sorry the Page can't be loaded due to some technical issues.</p>
        </section>
        <section v-else>
          <div
            class="row first-category-row"
            style="margin:0; padding:0; flex-wrap:wrap;"
          >
            <div v-if="loading_groups">
              Loading ...
            </div>
            <div
              v-else
              v-for="movie in groupMovies"
              :key="movie.id"
              class=" col-md-3 group-col"
              style="margin:0; padding:0; max-width:100%"
            >
              <div class="rating">
                <span class="top-span">
                  <font-awesome-icon
                    style="color:yellow;"
                    class="next"
                    icon="star"
                  >
                  </font-awesome-icon>
                  {{ movie.vote_average }}</span
                ><span style="font-size:15px;">\10</span>
              </div>
              <div class="title">
                <span> {{ movie.title }} </span>
              </div>
              <div class="release_date">
                <span> {{ movie.release_date }} </span>
              </div>
                <router-link :to="{path:'/movie/'+movie.id}">
                 <img
                style="padding:0; margin:0; width:100%;"
                :src="imagePath + movie.poster_path"
                alt="" />
                  </router-link>
             
            </div>
          </div>
        </section>
      </div>
    </div>
    <!--  end of groups -->

    <div class="check-categories text-center">
      <a href=""><router-link to="/browse">Check Out All of Our Movies!</router-link></a>
    </div>

    <!-- start of sign up  -->
    <div class="sign-up">
      <div class="heading">
        <h2>Subscribe!</h2>
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
              <input
                type="text"
                class="form-control"
                placeholder="E-mail"
                aria-label="E-mail"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div class="col-12 col-md-4  text-center text-md-left">
            <button class="btn btn-light">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
    <!-- end of sign up  -->

    <!-- start of foooter  -->
    <div class="footer">
      <div class="container">
        <div class="row">
          <div
            class="col-12 col-sm-8 col-md-8 col-lg-6 text-left footer-brand "
          >
            <a id="brand-logo" href="#">Movie<span>store</span></a>
            <p>
              This website gets its data from themoviedb, we only use it here to showcase 
              our software development abilities and to practice software development. We hope you enjoy your visit to our
              website and hopefully you will come back again!
            </p>
          </div>

          <div
            class="col-12 col-sm-4 col-md-4 col-lg-3 text-left  helpful-links "
          >
            <h6>Helpful Links</h6>
            <div class="row ">
              <div class="col">
                <ul class="footer-links1">
                  <li><a href="">About</a></li>
                  <li><a href="">Team</a></li>
                  <li><a href="">Privacy Policy</a></li>
                </ul>
              </div>
              <div class="col">
                <ul class="footer-links2">
                  <li><a href="">FAQ</a></li>
                  <li><a href="">Blog</a></li>
                  <li><a href="">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-3 text-left footer-address">
            <h6>Contact Us</h6>
            <ul>
              <li>2342 Sheraton St. next to hollywood avn, CA,USA</li>
              <li>Phone: +201066608215</li>
              <li>Email: <a href="">Nour.basha2011@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- end of footer  -->

    <Copyright />
  </div>
</template>

<script>
import axios from "axios";

import MovieCard from "../components/cards/MovieCard";
import Copyright from "../components/global/Copyright";

export default {
  name: "Home",
  data() {
    return {
      navHeight: 63,
      apiKey: "83a0145e56d35a45ba5ea0f752806cd2",
      loading_trending: true,
      errored_trending: false,
      loading_groups: true,
      errored_groups: false,
      loading_caro: true,
      errored_caro: false,
      AdImages: [],
      hottestMovies: [],
      hottestMoviesVisible: [false],
      groupMovies: [],
      imagePath: "https://image.tmdb.org/t/p/w300",
      imagePathOriginal: "https://image.tmdb.org/t/p/original",
    };
  },

  components: {
    MovieCard,
    Copyright,
  },
  created (){
    
    // getting carousel movies for images
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=" +
          this.apiKey +
          "&language=en-US&page=1"
      )
      .then((response) => {
        this.AdImages = response.data.results;
      })
      .catch((error) => {
        this.errored_caro = true;
        console.log(error);
      })
      .finally(() => {
        this.loading_caro = false;
      }),

    //getting our hottest movies (trnding)
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=" + this.apiKey
      )
      .then((response) => {
        this.hottestMovies = response.data.results;
        //setting visibility to first 3 cards
        for (let r = 0; r < this.hottestMovies.length; r++) {
          if (r < 3) {
            this.hottestMoviesVisible[r] = true;
          } else {
            this.hottestMoviesVisible[r] = false;
          }
        }
        // cutting the overview string
        for (let i = 0; i < this.hottestMovies.length; i++) {
          this.hottestMovies[i].overview =
            this.hottestMovies[i].overview
              .replace("-", " ")
              .replace("—", " ")
              .split(" ")
              .slice(0, 12)
              .join(" ") + " ...";
        }
      })
      .catch((error) => {
        this.errored_trending = true;
         console.log(error);
      })
      .finally(() => {
        this.loading_trending = false;
      }),

    // getting our movie collection (popular)
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=" +
          this.apiKey +
          "&language=en-US&page=1"
      )
      .then((response) => {
        this.groupMovies = response.data.results;

        for (let i = 0; i < this.groupMovies.length; i++) {
          this.groupMovies[i].release_date = this.groupMovies[
            i
          ].release_date.slice(0, 4);
        }
      })
      .catch((error) => {
        this.errored_groups = true;
         console.log(error);
      })
      .finally(() => {
        this.loading_groups = false;
      })
  
  },
  updated() {
    var w = window.innerHeight;
    var el = document.getElementsByClassName("carousel-inner")[0];
    el.style.height = w - this.navHeight + "px";
    window.addEventListener("resize", this.adjustHeight);
  },
 mounted() {
    //  this.$nextTick(function() {
    // });
    
   
},
methods: {
    adjustHeight() {
      var w = window.innerHeight;
      var el = document.getElementsByClassName("carousel-inner")[0];
      el.style.height = w - this.navHeight + "px";
    },
    swipeHottestMoviesNext() {
      for (let i = 0; i < this.hottestMoviesVisible.length; i++) {
        if (this.hottestMoviesVisible[i] == true) {
          if (this.hottestMoviesVisible[i + 1] == false) {
            this.hottestMoviesVisible[i + 1] = true;

            this.hottestMoviesVisible[i] = false;
            if (i - 1 >= 0) {
              this.hottestMoviesVisible[i - 1] = false;
            }
            if (i - 2 >= 0) {
              this.hottestMoviesVisible[i - 2] = false;
            }

            if (i + 2 < this.hottestMoviesVisible.length) {
              this.hottestMoviesVisible[i + 2] = true;
            }
            if (i + 3 < this.hottestMoviesVisible.length) {
              this.hottestMoviesVisible[i + 3] = true;
            }
            this.$forceUpdate();
            break;
          }
        }
      }
    },

    swipeHottestMoviesPrev() {
      for (let i = this.hottestMoviesVisible.length - 1; i >= 0; i--) {
        if (this.hottestMoviesVisible[i] == true) {
          if (this.hottestMoviesVisible[i - 1] == false) {
            this.hottestMoviesVisible[i] = false;
            this.hottestMoviesVisible[i - 1] = true;
            if (i - 2 >= 0) {
              this.hottestMoviesVisible[i - 2] = true;
            }
            if (i - 3 >= 0) {
              this.hottestMoviesVisible[i - 3] = true;
            }
            if (i + 1 < this.hottestMoviesVisible.length) {
              this.hottestMoviesVisible[i + 1] = false;
            }
            if (i + 2 < this.hottestMoviesVisible.length) {
              this.hottestMoviesVisible[i + 2] = false;
            }

            this.$forceUpdate();
            break;
          }
        }
      }
    },
  }
}

</script>
