<template>
  <div class="movie">
    <div class="container">
        
      <section v-if="loadingError">
        <p>Sorry Can't Load This Movie</p>
      </section>
      <section v-else>
        <div v-if="loadingMovie">Loading ...</div>
        <div class="row first-row" v-else>
           
              <div class="col-12   col-lg-4">
                 
                <div v-if="movie.poster_path != undefined">
                          <img
                          class="poster-image img-fluid "
                          :src="imagePath + movie.poster_path"
                          alt=""
                          />
                </div>
                <div v-else>
                       <img
                          class="poster-image img-fluid "
                          src="../imgs/alt.jpg"
                          alt=""
                          />
                </div>

               
              </div>
              <div class="col-12 col-lg-8  movie-meta">
                        <div class="row d-flex justify-content-center movie-name-row">
                          <h1> {{movie.title}}</h1>
                        </div>

                          <div class="row d-flex justify-content-center movie-year-row">
                          <h3> {{movie.release_date.slice(0,4)}}</h3>
                        </div>

                        <div class="row d-flex justify-content-center rating-row">
                                <div class="rating-col">
                                      <div  class="rate-val">
                                            <span class="val"> {{ movie.vote_average }} </span>
                                            <span class="out-of">/10</span>
                                      </div>
                               </div>

                              <div class="rate-star"  v-for="item in 10" :key="item">
                                <div v-if="item <= ratingFloored">
                                    <font-awesome-icon icon="star" class="checked "> </font-awesome-icon>
                                </div>
                                <div v-else>
                                     <font-awesome-icon icon="star" class="gray"> </font-awesome-icon>
                                </div>
                                
                              </div>
                        </div>

                        <div class="row d-flex justify-content-center text center overview-row">
                           
                                <div class="col justify-self-center">
                                  <h6>Overview</h6>
                                    <p>{{ movie.overview }}</p>
                                </div>
                                                        
                        </div>


                 </div>
        </div>
      </section>


      <section v-if="loadingError">
              <p>Sorry Can't Load This Movie</p>
            </section>
      <section v-else>
        <div v-if="loadingMovie">Loading ...</div>
             <div class="row video-row"  >              
                    <div  v-if="movieVideos.length != 0"
                      class="col video embed-responsive embed-responsive-16by9" style="justify-self:center;"
                                    >
                                    
                                          <div v-for="(video,index) in movieVideos" :key="video.id">
                                                <div v-if="index==0">
                                                    <iframe 
                                                    class="embed-responsive-item"
                                                    :src="videoPath+video.key"
                                                    frameborder="0" 
                                                    allow="accelerometer; autoplay; clipboard-write; " 
                                                    allowfullscreen></iframe>
                                                </div>
                                           </div>                      
                    </div>
                     <div v-else>
                          <p style="color:white; font-size:14px;">Sorry, No Trailer Available for This movie.</p>
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

        <div class="row second-row text-left justify-content-around" v-else>
              
          <div  class=" col-12 col-sm-6 col-md-4 col-lg-3"   
                v-for="(item, index) in movieCastCrew.cast" :key="item.id">
                 <div v-if="movieCastCrew.cast.length != 0"> 
                          <div v-if="index <= 7">
                            <span v-if="item.profile_path != undefined">
                              <CastCard  :img="castImagePath+item.profile_path"
                                          :name="item.name"
                                          :roleName="item.character" />
                            </span>
                            <span v-else>
                                <CastCard :img="altImagePath"
                                          :name="item.name"
                                          :roleName="item.character" />
                            </span>
                         </div> 
                 </div>
                 <div v-else>
                        <p style="color:white; font-size:14px;">Sorry, No Cast Available for This movie.</p>
                 </div>
                  
          </div>
          

        </div>
<!-- v-if="movieCastCrew.cast.length != 0" -->

        <div class="row d-flex justify-content-end full-cast-row">
           
                  <div class="fullCast">
                    <a :href="fullCastLink+this.$route.params.id"> See Full Cast</a>
                  </div>
           
        </div>
      </section>

    </div>
  </div>
</template>

<script>
import axios from "axios";
import CastCard from '../components/cards/CastCard';

export default {
  name: "Movie",
  data() {
    return {
      apiKey: "83a0145e56d35a45ba5ea0f752806cd2",
      imagePath: "https://image.tmdb.org/t/p/w300",
      castImagePath: "https://image.tmdb.org/t/p/w300",
      altImagePath:'alt.jpg',
      videoPath: "https://www.youtube.com/embed/",
      fullCastLink:'https://www.themoviedb.org/movie/',
      movie: [],
      movieCastCrew: [],
       movieVideos:[],
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
          this.ratingFloored = Math.round(this.movie.vote_average);
          this.movieVideos = this.movie.videos.results;
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
  components : {CastCard}
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
   
    .poster-image {
      margin-bottom: 0;
      width: 100%;
      height: 90%;
    }

    .movie-meta {
      align-self: center;
      .movie-name-row {
        h1{
          color: white;
          
        }
      }

      @media (max-width:992px) {
         .movie-name-row {
       margin-top: 20px;
      }
      }

      .movie-year-row {
            margin-top: 10px;
          h3{
            color: rgba(212, 0, 255, 0.726);
            
          }
      }


      .rating-row{
             display: flex;
                margin-top: 20px;

           .rating-col {
            padding-left: 15px;  
           .rate-val {
            margin-right: 20px;
            font-size: 1rem;
            color: $colo-secondary;
           .val {
            font-size: 22px;
            color: white;
            font-weight: bold;
            margin-left: 10px;
                }
           .out-of {
            font-size: 16px;
            color: white;
            font-weight: bold;
               }
         }
      }
        .rate-star {
           
            align-self: center;
         
          .checked {
             color: yellow;
             align-content: center;
          }
          .gray{
             color: rgb(126, 126, 126);
          }
        }

      }

      
        .overview-row{
          margin-top: 20px;
           h6 {
             font-size: 20px;
          color: $colo-secondary;
             }
           p {
          color: white;
          line-height: 2;
          font-size: 18px;
          width: 100%;
            }
        }

      
      
    }


  }

  .video-row{
    margin-top: 40px;
    margin-bottom: 40px;
    padding-right: 5%;
    padding-left: 5%;
        .video{
          margin-top: 5px;
          margin-bottom: 5px;
        }
    }
    .cast-title{
        font-size: 24px;
        color: $colo-secondary;
        margin-bottom: 20px;
    }

    .full-cast-row {
     padding: 20px 0;
        .fullCast{
          a{
            font-size:20px;
            color: $colo-secondary;
            padding-right: 10px;
          }
        }
     }


  .second-row {
    .cast-image {
      width: 4%;
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
