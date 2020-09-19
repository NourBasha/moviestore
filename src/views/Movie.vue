<template>
  <div class="movie">
    <div class="container">
        
      <section v-if="loadingError">
        <p>Sorry Can't Load This Movie</p>
      </section>
      <section v-else>
        <div v-if="loadingMovie">Loading ...</div>
        <div class="row first-row" v-else>
          <div class="col-4">
            <img
              class="poster-image img-fluid "
              :src="imagePath + movie.poster_path"
              alt=""
            />
          </div>
          <div class="col-8 text-left movie-meta">
            <div class="rating-col">
              <div class="rate-val">
                Rating:
                <span class="val"> {{ movie.vote_average }} </span>
                <span class="out-of">/10</span>
              </div>
            </div>
            <div class="rate-star">
              <font-awesome-icon icon="star" class="yello"> </font-awesome-icon>
            </div>

            <div class="overview-col">
              <h6>Overview</h6>
              <p>{{ movie.overview }}</p>
            </div>
          </div>
        </div>
      </section>


        <section v-if="loadingError">
        <p>Sorry Can't Load This Movie</p>
      </section>
      <section v-else>
        <div v-if="loadingMovie">Loading ...</div>
        <div class="row " v-else>
            
            <div class="col-6 offset-3"  v-for="video in movie.videos.results" :key="video.id" >
                    <div v-if="video.type=='Trailer'">
                            <iframe width="auto" height="auto"
                            :src="videoPath+video.key"
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>
                    </div>
            </div>
          
        </div>
      </section>


      <section v-if="errorLoadingCast">
        <p>Sorry Can't Load cast</p>
      </section>
      <section v-else>
        <h6 class="text-left cast-title">Cast</h6>
        <div v-if="loadingCast">
          Loading ...
        </div>

        <div class="row second-row text-left" v-else>
          <div class="col-12" v-for="item in movieCastCrew.cast" :key="item.id">
            <span v-if="item.profile_path != undefined">
              <img
                class="rounded cast-image"
                :src="castImagePath + item.profile_path"
                alt="Cast Image"
              />
            </span>
            <span v-else>
              <img
                class="rounded cast-image"
                src="../imgs/alt.jpg"
                alt="Cast Image"
              />
            </span>
            <span class="cast-name"> {{ item.name }} </span>
            <span class="cast-as"> As </span>
            <span class="cast-role"> {{ item.character }} </span>
            <hr />
          </div>
        </div>
      </section>



    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Movie",
  data() {
    return {
      apiKey: "83a0145e56d35a45ba5ea0f752806cd2",
      imagePath: "https://image.tmdb.org/t/p/w300",
      castImagePath: "https://image.tmdb.org/t/p/w300",
      videoPath: "https://www.youtube.com/embed/",
      movie: [],
      movieCastCrew: [],
      loadingError: false,
      loadingMovie: true,
      errorLoadingCast: false,
      loadingCast: true,
      ratingFloored: 0,
    };
  },
  computed: {
    // ...mapGetters({
    //      movieID :  'getMovieID'
    // })
  },
  mounted() {
    this.getMovieDetails(this.$route.params.id);
  },
  methods: {
    getMovieDetails(id) {
      var url =
        "https://api.themoviedb.org/3/movie/" +
        id +
        "?api_key=" +
        this.apiKey +
        "&language=en-US&append_to_response=videos";
      axios
        .get(url)
        .then((response) => {
          this.movie = response.data;
          this.ratingFloored = Math.round(this.movie.vote_Average);
          console.log("this is my object"+this.movie.videos.results[0].key);
        })
        .catch((error) => {
          this.loadingError = true;
          alert(error);
        })
        .finally(() => {
          this.loadingMovie = false;
        });

      var urlCast =
        "https://api.themoviedb.org/3/movie/" +
        id +
        "/credits?api_key=" +
        this.apiKey;

      axios
        .get(urlCast)
        .then((response) => {
          this.movieCastCrew = response.data;
        })
        .catch((error) => {
          this.errorLoadingCast = true;
          alert(error);
        })
        .finally(() => {
          this.loadingCast = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
$color-main: rgba(212, 0, 255, 0.726);
$color-main-soft: rgba(212, 0, 255, 0.363);
$colo-secondary: #42b983;
$color-dark: #343a40;
$color-card: #21262c;
$color-soft-text: rgb(155, 155, 155);
.movie {
  background-color: $color-card;

  .first-row {
    display: flex;
    padding-top: 20px;
    padding-bottom: 20px;
    .poster-image {
      width: 100%;
    }

    .movie-meta {
      align-self: center;
      .rating-col {
        margin-top: 5px;
        display: inline;
        .rate-val {
          display: inline;
          margin-right: 20px;
          font-size: 1rem;
          color: $colo-secondary;
          .val {
            font-size: 16px;
            color: white;
            font-weight: bold;
            margin-right: 3px;
          }
          .out-of {
            font-size: 12px;
            color: white;
            font-weight: bold;
          }
        }
      }
        .rate-star {
          display: inline;
          color: yellow;
        }
      .overview-col {
        margin-top: 10px;
        h6 {
          color: $colo-secondary;
        }
        p {
          color: white;
          line-height: 2;
          font-size: 14px;
          width: 80%;
        }
      }
    }
  }

    .cast-title{
        font-size: 1rem;
        color: $colo-secondary;
    }

  .second-row {
    .cast-image {
      width: 5%;
      height: auto;
    }

    .cast-name {
        font-size: 18px;
        color: white;
        font-weight: bold;
        font-family: 'Times New Roman', Times, serif;
        margin: 0 30px 0 30px ;
    }
    .cast-as{
        font-size: 14px;
        color: $colo-secondary;
    }
    .cast-role {
          font-size: 18px;
        color: white;
        font-family: 'Times New Roman', Times, serif;
        margin-left: 30px;
    }
  }
}
</style>
