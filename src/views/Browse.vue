<template>
  <div class="browse">
    <div class="container">
      <div class="filter text-center">
        <h3>Filter Movies</h3>

        <div class="row">
            <div class="col-4  col-lg-3" >
              <select class="custom-select genre-filter" @change="searchByGenre" >
                 <!-- <option value="-" selected>Choose Genre</option> -->
                <option value="-" disabled selected>Choose Genre</option>
                <option value="0" >All</option>
                <option value="28">Action</option>
                <option value="12">Adventure</option>
                <option value="16">Animation</option>
                <option value="35">Comedy</option>
                <option value="80">Crime</option>
                <option value="99">Documentary</option>
                <option value="18">Drama</option>
                <option value="10751">Family</option>
                <option value="14">Fantasy</option>
                <option value="36">History</option>
                <option value="27">Horror</option>
                <option value="10402">Music</option>
                <option value="9648">Mystery</option>
                <option value="10749">Romance</option>
                <option value="878">Science Fiction</option>
                <option value="10770">Tv Movie</option>
                <option value="53">Thriller</option>
                <option value="10752">War</option>
                <option value="37">Western</option>
              </select>
            </div>
          <div class="col-4  col-lg-2">
            <select class="custom-select year-filter" @change="searchByYear">
              <option value="-" selected disabled>Choose Year</option>
              <option  v-for="year in movieYear" :key="year" :value="year" >
                {{ year }}
              </option>
            </select>
          </div>
          <div class="col-4  col-lg-3">
            <select class="custom-select rating-filter" @change="searchByRating">
              <option value="-" selected disabled>Rating</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
              <option value="6">6+</option>
              <option value="7">7+</option>
              <option value="8">8+</option>
              <option value="9">9+</option>
              <option value="10">10</option>
            </select>
          </div>
          <div
            class="col-10 offset-1  col-md-6 offset-md-3 offset-lg-0 col-md-4 col-lg-4"
          >
            <form   prevent class="form-inline my-2 my-lg-0 myform mt-3 mt-lg-0">
              <input
                class="form-control  mr-sm-2 filter-search-input"
                type="search"
                placeholder="Movie Name"
                aria-label="Search"
              />
              <button @click="searchButton"
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <section v-if="moviesLoadingError">
        <p>Sorry, this page can't be loaded at the moment ...</p>
      </section>
      <section v-else>
        <div v-if="moviesLoading">
          Loading ...
        </div>

        <div class="row" style="margin:0; padding:0;" v-else>
          <div
            class="col-12 col-sm-4 col-md-3 movie-col"
            style="margin:0; padding:0;"
            v-for="movie in popMovies.results"
            :key="movie.id"
          >
            <div class="rating">
              <span class="top-span">
                <font-awesome-icon style="color:yellow;" icon="star">
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
            <img class="movie-image"
              style="padding:0; margin:0; width:100%;"
              :src="imagePath+movie.poster_path"
              alt="Image not Found"
            />
          </div>
        </div>
      </section>
    </div>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center paging ">
        <li class="page-item">
          <a class="page-link prev-page" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item paging-item first active ">
          <a @click="changeFirst" class="page-link first-a" href="#">{{
            paging[0]
          }}</a>
        </li>
        <li class="page-item paging-item middle">
          <a @click="changeMiddle" class="page-link middle-a" href="#">{{
            paging[1]
          }}</a>
        </li>
        <li class="page-item paging-item last">
          <a @click="changeLast" class="page-link last-a" href="#">{{
            paging[2]
          }}</a>
        </li>
        <li class="page-item">
          <a class="page-link next-page" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
    <Copyright />
  </div>
</template>

<script>
import Copyright from "../components/global/Copyright";
import axios from "axios";


var currentDate = new Date();

var x = [];
for (var i = 1900; i <= currentDate.getFullYear(); i++) {
  x.unshift(i);
}


export default {
  name: "Browse",
  data() {
    return {
      movieYear: x,
      apiKey: "83a0145e56d35a45ba5ea0f752806cd2",
      popMovies: [],
      moviesLoading: true,
      moviesLoadingError: false,
      filterApplied:false,
      filterByMovieName:false,
      filterType: [false , false , false ,false],
      imagePath: "https://image.tmdb.org/t/p/w300",
      paging: [1, 2, 3],
      currentPage: 1,
    };
  },
  watch: {
    currentPage: {
      handler() {
          if(!this.filterApplied){
              if(!this.filterByMovieName){
                  this.getMovies();
              }else {
                // search by movie name
               this.getMovieByName()
              }
          }else{
            //apply filter here
           this.getFilteredMovies();
          }
       
      },
    },
  },
  created() {},
  mounted() {

    if(!this.filterApplied){  // filter is not applied
      //getting movies from axios
      this.getMovies();
    }
   
  

    var next = document.getElementsByClassName("next-page")[0];
    next.addEventListener("click", this.nextPageClick);

    var prev = document.getElementsByClassName("prev-page")[0];
    prev.addEventListener("click", this.prevPageClick);

    var first = document.getElementsByClassName("first")[0];
    var middle = document.getElementsByClassName("middle")[0];
    var last = document.getElementsByClassName("last")[0];

    first.addEventListener("click", function() {
      if (!this.classList.contains("active")) {
        this.classList.add("active");
        middle.classList.remove("active");
        last.classList.remove("active");
      }
    });

    middle.addEventListener("click", function() {
      this.classList.add("active");
      first.classList.remove("active");
      last.classList.remove("active");
    });

    last.addEventListener("click", function() {
      this.classList.add("active");
      first.classList.remove("active");
      middle.classList.remove("active");
    });
  },
  components: { Copyright },
  methods: {
    getMovies() {
      axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=" +
            this.apiKey +
            "&language=en-US&page=" +
            this.currentPage
        )
        .then((response) => {
          this.popMovies = response.data;
          // console.log("data is : " + this.popMovies.results[0].title);
          for (let i = 0; i < this.popMovies.results.length; i++) {
            this.popMovies.results[i].release_date = this.popMovies.results[i].release_date.slice(0, 4);
          }
           this.muteExtraPages();
        })
        .catch((error) => {
          this.moviesLoadingError = true;
          console.log(error);
        })
        .finally(() => {
          this.moviesLoading = false;
        });
    },
    searchByGenre(event) {

      // shut the movie search
        document.getElementsByClassName("filter-search-input")[0].value = "";
        this.filterByMovieName = false;
        this.filterApplied = true;
        this.filterType[0] = true ;
         let url = "https://api.themoviedb.org/3/discover/movie?api_key="+this.apiKey
         +"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false"
         +"&page="+this.currentPage; 

      if(this.filterType[1] == true){ // year filter 
        let selectYear = document.getElementsByClassName("year-filter")[0].value;
        url = url + "&primary_release_date.gte="
        +selectYear+"-01-01&primary_release_date.lte="+selectYear+"-12-31"
        } 
         if (this.filterType[2]==true){
             let selectRating = document.getElementsByClassName("rating-filter")[0].value;
              url = url +"&vote_average.gte="+selectRating;
          }

       axios
        .get( event.target.value == 0 ? url : url+"&with_genres="+event.target.value)
        .then((response) => {
          this.popMovies = response.data;
          for (let i = 0; i < this.popMovies.results.length; i++) {
            this.popMovies.results[i].release_date = this.popMovies.results[i].release_date.slice(0, 4);
          }
          this.muteExtraPages();
        })
        .catch((error) => {
         // this.moviesLoadingError = true;
          console.log(error);
        })
        .finally(() => {
        //  this.moviesLoading = false;
        });

    },
    searchByYear(event){


      // shut the movie search
        document.getElementsByClassName("filter-search-input")[0].value = "";
        this.filterByMovieName = false;
        this.filterApplied = true;
        this.filterType[1] = true ; // year filter

            
      let url = "https://api.themoviedb.org/3/discover/movie?api_key="+this.apiKey
         +"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false"
         +"&page="+this.currentPage; 

          if (this.filterType[0] == true){ // genres filter
                 let selectGenre = document.getElementsByClassName("genre-filter")[0].value;
            if (selectGenre != 0){
                url = url +"&with_genres="+selectGenre;
            }
          }
          
          if (this.filterType[2]==true){
             let selectRating = document.getElementsByClassName("rating-filter")[0].value;
              url = url +"&vote_average.gte="+selectRating;
          }

     axios
        .get(url +"&primary_release_date.gte="
        +event.target.value+"-01-01&primary_release_date.lte="+event.target.value+"-12-31")
        .then((response) => {
          this.popMovies = response.data;
          for (let i = 0; i < this.popMovies.results.length; i++) {
            this.popMovies.results[i].release_date = this.popMovies.results[i].release_date.slice(0, 4);
          }
                    this.muteExtraPages();

        })
        .catch((error) => {
          this.moviesLoadingError = true;
          console.log(error);
        })
        .finally(() => {
          this.moviesLoading = false;
        });
    },
    searchByRating(event){

        // shut the movie search
        document.getElementsByClassName("filter-search-input")[0].value = "";
        this.filterByMovieName = false;
        this.filterApplied = true; // my filters
        this.filterType[2] = true ; // rating filter

      let url = "https://api.themoviedb.org/3/discover/movie?api_key="+this.apiKey
         +"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false"
         +"&page="+this.currentPage; 

          if (this.filterType[0] == true){ // genres filter
                 let selectGenre = document.getElementsByClassName("genre-filter")[0].value;
            if (selectGenre != 0){
                url = url +"&with_genres="+selectGenre;
            }
          }
          
         if(this.filterType[1] == true){ // year filter 
                let selectYear = document.getElementsByClassName("year-filter")[0].value;
                url = url + "&primary_release_date.gte="
                +selectYear+"-01-01&primary_release_date.lte="+selectYear+"-12-31"
             }

     axios
        .get(url +"&vote_average.gte="+event.target.value)
        .then((response) => {
          this.popMovies = response.data;
          
            for (let i = 0; i < this.popMovies.results.length; i++) {
              if(this.popMovies.results[i].release_date != undefined){
                 this.popMovies.results[i].release_date = this.popMovies.results[i].release_date.slice(0, 4);
              }
          }
                   this.muteExtraPages();
        })
        .catch((error) => {
          this.moviesLoadingError = true;
          console.log(error);
        })
        .finally(() => {
          this.moviesLoading = false;
        });
    },
    searchButton(){

             // shut all the other filters 
             document.getElementsByClassName("genre-filter")[0].value = "-";
             document.getElementsByClassName("year-filter")[0].value = "-";
             document.getElementsByClassName("rating-filter")[0].value = "-";
             //
             this.paging[0]= 1 ; 
             this.paging[1]= 2 ;
             this.paging[2]= 3 ; 
             this.currentPage=1;

       this.filterApplied = false;
           
       this.filterByMovieName = true; // use this for paging 

      let movieInput = document.getElementsByClassName("filter-search-input")[0].value;

        if (movieInput != ""){
          movieInput = movieInput.split(" ").join("+");
              let url = "https://api.themoviedb.org/3/search/movie?api_key="+this.apiKey+"&query="+ movieInput+"&page="+this.currentPage;
            axios
                .get(url )
                .then((response) => {
                  this.popMovies = response.data;
                    if (this.popMovies.results.length != 0){
                    for (let i = 0; i < this.popMovies.results.length; i++) {
                    if(this.popMovies.results[i].release_date != undefined){
                    this.popMovies.results[i].release_date = this.popMovies.results[i].release_date.slice(0, 4);
                               }
                      }  
                      this.muteExtraPages();
                    }else{
                      alert("No such movie is found.");
                    }
        })
        .catch((error) => {
          this.moviesLoadingError = true;
          alert(error);
        })
        .finally(() => {
          this.moviesLoading = false;
        });
        }
      
    },
    getFilteredMovies(){
      
      let url = "https://api.themoviedb.org/3/discover/movie?api_key="+this.apiKey
         +"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false"
         +"&page="+this.currentPage; 


    if (this.filterType[0] == true){ // genres filter
       let selectGenre = document.getElementsByClassName("genre-filter")[0].value;
       if (selectGenre != 0){
          url = url +"&with_genres="+selectGenre;
       }
    }
     if(this.filterType[1] == true){ // year filter 
        let selectYear = document.getElementsByClassName("year-filter")[0].value;
        url = url + "&primary_release_date.gte="
        +selectYear+"-01-01&primary_release_date.lte="+selectYear+"-12-31"
    }
    
    if (this.filterType[2]==true){
             let selectRating = document.getElementsByClassName("rating-filter")[0].value;
              url = url +"&vote_average.gte="+selectRating;
          }

      
      axios.get(url)
        .then((response) => {
          this.popMovies = response.data;
          for (let i = 0; i < this.popMovies.results.length; i++) {
            this.popMovies.results[i].release_date = this.popMovies.results[i].release_date.slice(0, 4);
          }
                    this.muteExtraPages();

        })
        .catch((error) => {
          this.moviesLoadingError = true;
          console.log(error);
        })
        .finally(() => {
          this.moviesLoading = false;
        });
    },
    getMovieByName(){

          /// we need to include the page number in our query!!!!
      let movieInput = document.getElementsByClassName("filter-search-input")[0].value;

        if (movieInput != ""){
          movieInput = movieInput.split(" ").join("+");
              let url = "https://api.themoviedb.org/3/search/movie?api_key="+this.apiKey+"&query="+movieInput+"&page="+this.currentPage;
            axios
                .get(url )
                .then((response) => {
                  this.popMovies = response.data;
                    if (this.popMovies.results.length != 0){
                    for (let i = 0; i < this.popMovies.results.length; i++) {
                    if(this.popMovies.results[i].release_date != undefined){
                    this.popMovies.results[i].release_date = this.popMovies.results[i].release_date.slice(0, 4);
                               }
                      }  
                                this.muteExtraPages();

                    }else{
                      alert("No such movie is found.");
                    }
        })
        .catch((error) => {
          this.moviesLoadingError = true;
          alert(error);
        })
        .finally(() => {
          this.moviesLoading = false;
        });
    }
    },
    nextPageClick() {

      if (this.paging[2]+1 <= this.popMovies.total_pages) {
         

          this.paging[0] = this.paging[this.paging.length - 1] + 1;
          this.currentPage = this.paging[0];

           this.paging[1] = this.paging[0] + 1;
           this.paging[2] = this.paging[1] + 1;
        
          this.muteExtraPages();

          document.getElementsByClassName("first")[0].classList.add("active");
         document.getElementsByClassName("middle")[0].classList.remove("active");
        document.getElementsByClassName("last")[0].classList.remove("active");

        
        this.$forceUpdate();
      }
    },
    prevPageClick() {
      console.log(" this is paging 2 :" + this.paging[1]);

      if (this.paging[0] > 1) {
        this.paging[2] = this.paging[0] - 1;
        this.paging[1] = this.paging[2] - 1;
        this.paging[0] = this.paging[1] - 1;
        this.currentPage = this.paging[2];
        document.getElementsByClassName("last")[0].classList.add("active");
        document.getElementsByClassName("first")[0].classList.remove("active");
        document.getElementsByClassName("middle")[0].classList.remove("active");
        this.$forceUpdate();
      }
    },
    changeFirst(event) {
      this.currentPage = event.target.innerHTML;
    },
    changeMiddle(event) {
      this.currentPage = event.target.innerHTML;
    },
    changeLast(event) {
      this.currentPage = event.target.innerHTML;
    },
    muteExtraPages(){
        if (this.popMovies.total_pages <= this.currentPage+2){
              switch(this.popMovies.total_pages){
                case this.currentPage :  {  
                              document.getElementsByClassName("middle")[0].classList.add("muted");
                              document.getElementsByClassName("last")[0].classList.add("muted"); 
                              break; } 
                case this.currentPage +1 :  {  
                              document.getElementsByClassName("last")[0].classList.add("muted");
                              break ;}
                case this.currentPage+2 :  {   document.getElementsByClassName("next-page")[0].classList.add("muted");  
                     break ;}
              }
        }else {
                document.getElementsByClassName("middle")[0].classList.remove("muted");
                document.getElementsByClassName("last")[0].classList.remove("muted");
                document.getElementsByClassName("next-page")[0].classList.remove("muted"); 
        }
    }
  
  
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

.browse {
  width: 100%;
  background-color: $color-card;

  .filter {
    padding-top: 40px;
    margin-bottom: 40px;
    h3 {
      font-size: 40px;
      color: $colo-secondary;
      font-weight: bold;
      font-family: "Times New Roman", Times, serif;
      margin-bottom: 30px;
    }
    select {
      background-color: $color-dark;
      color: $colo-secondary;
      appearance: menulist;

      option {
        color: $colo-secondary;

        padding: 5px;
      }
    }
    .myform {
      justify-content: flex-end;
    }
  }

  .movie-col {
    cursor: pointer;
    &:hover > .rating {
      display: block;
    }
    &:hover > .title {
      display: block;
    }
    &:hover > .release_date {
      display: block;
    }
  }

  .rating {
    position: absolute;
    left: 20px;
    top: 10px;
    background-color: #343a40c0;
    border-radius: 10px;
    display: none;
    padding: 0 30px 0 30px;
    span {
      color: $colo-secondary;
      font-size: 30px;
      padding: 0;
    }
  }

  .title {
    position: absolute;
    right: 5px;
    bottom: 10px;
    left: 5px;
    background-color: #343a40e3;
    border-radius: 10px;
    display: none;
    span {
      color: $colo-secondary;
      padding: 20px;
      font-size: 30px;
    }
  }
  .release_date {
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: #343a40c0;
    border-radius: 10px;
    display: none;
    span {
      color: $colo-secondary;
      padding: 20px;
      font-size: 18px;
      font-weight: bold;
      font-weight: bold;
    }
  }

  .paging {
    margin-top: 30px;

   .muted {
          pointer-events: none;
          cursor: default;
        }
    li {
      a {
        background-color: $color-card;
      }
    }
  }
}
</style>
