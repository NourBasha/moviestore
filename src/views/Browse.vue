<template>
  <div class="browse">
    <div class="container">
      <div class="filter text-center">
        <h3>Filter Movies</h3>
        <div class="row">
          <div class="col-4  col-lg-3">
            <select class="custom-select">
              <option value="-">Choose Category</option>
              <option value="action">Action</option>
              <option value="comedy">Comedy</option>
              <option value="drama">Drama</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci Fi</option>
            </select>
          </div>
          <div class="col-4  col-lg-2">
            <select class="custom-select">
              <option value="-">Choose Year</option>
              <option value="action" v-for="year in movieYear" :key="year">
                {{ year }}
              </option>
            </select>
          </div>
          <div class="col-4  col-lg-3">
            <select class="custom-select">
              <option value="-">Rating</option>
              <option value="">1+</option>
              <option value="">2+</option>
              <option value="">3+</option>
              <option value="">4+</option>
              <option value="">5+</option>
              <option value="">6+</option>
              <option value="">7+</option>
              <option value="">8+</option>
              <option value="">9+</option>
              <option value="">10</option>
            </select>
          </div>
          <div
            class="col-10 offset-1  col-md-6 offset-md-3 offset-lg-0 col-md-4 col-lg-4"
          >
            <form class="form-inline my-2 my-lg-0 myform mt-3 mt-lg-0">
              <input
                class="form-control  mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

      <div style="margin:0; padding:0;" class="row">
        <div
          style="margin:0; padding:0;"
          class="col-12 col-sm-4 col-md-3 movie-col"
          v-for="movie in popMovies"
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
          <img
            style="padding:0; margin:0; width:100%;"
            :src="imagePath + movie.poster_path"
            alt=""
          />
        </div>
      </div>
    </div>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center paging ">
        <li class="page-item">
          <a class="page-link prev-page" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item paging-item first active "> <a @click="changeFirst" class="page-link first-a" href="#">{{paging[0]}}</a></li>
        <li class="page-item paging-item middle"><a @click="changeMiddle" class="page-link middle-a" href="#">{{paging[1]}}</a></li>
        <li class="page-item paging-item last">  <a @click="changeLast" class="page-link last-a" href="#">{{paging[2]}}</a></li>
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


var x = [];
for (var i = 1900; i <= 2020; i++) {
  x.push(i);
}

export default {
  name: "Browse",
  data() {
    return {
      movieYear: x,
      apiKey: "83a0145e56d35a45ba5ea0f752806cd2",
      popMovies: [],
      imagePath: "https://image.tmdb.org/t/p/w300",
      paging: [1,2,3],
      currentPage: 1
      
    };
  },watch : {

    currentPage : {
      handler (){
        this.getMovies();
      }
    }
    
  },
  async mounted() {

            //getting movies from axios 
            this.getMovies();

    for (let i = 0; i < this.popMovies.length; i++) {
      this.popMovies[i].release_date = this.popMovies[i].release_date.slice(
        0,
        4
      );
    }
    
        
          var next = document.getElementsByClassName("next-page")[0];
          next.addEventListener('click', this.nextPageClick);

             var prev  = document.getElementsByClassName("prev-page")[0];
          prev.addEventListener('click', this.prevPageClick);



               var first = document.getElementsByClassName("first")[0];
              var middle = document.getElementsByClassName("middle")[0];
             var last = document.getElementsByClassName("last")[0];



            //  var first_a = document.getElementsByClassName("first-a")[0];
            //  first_a.addEventListener('click', this.changeFirst);
            //   var middle_a = document.getElementsByClassName("middle-a")[0];
            //       middle_a.addEventListener('click', this.changeMiddle);
            //  var last_a = document.getElementsByClassName("last-a")[0];
            //       last_a.addEventListener('click', this.changeLast);



            first.addEventListener('click', function (){
                if(!this.classList.contains("active")){
                  this.classList.add("active");
                  middle.classList.remove("active");
                  last.classList.remove("active");
                }
             
            });

          
            middle.addEventListener('click', function (){
              this.classList.add("active");
              first.classList.remove("active");
              last.classList.remove("active");
            });
         
               last.addEventListener('click', function (){
              this.classList.add("active");
             first.classList.remove("active");
              middle.classList.remove("active");
            });



  },
  components: { Copyright }, 
  methods :{

            async getMovies (){
                  const movies = await axios.get(
                  "https://api.themoviedb.org/3/movie/popular?api_key=" +
                    this.apiKey +"&language=en-US&page="+this.currentPage
                );
                this.popMovies = movies.data.results;
                 for (let i = 0 ; i<this.popMovies.length;i++){
                  this.popMovies[i].release_date = this.popMovies[i].release_date.slice(0,4);
            }
            },

        nextPageClick (){ 
              
                if (this.paging[2] <= 500){
                 this.paging[0] = this.paging[this.paging.length-1] +1 ;
                this.paging[1] = this.paging[0] + 1 ;
                this.paging[2] = this.paging[1] + 1 ;
                this.currentPage = this.paging[0];
                 document.getElementsByClassName("first")[0].classList.add("active");
                  document.getElementsByClassName("middle")[0].classList.remove("active");
                  document.getElementsByClassName("last")[0].classList.remove("active");
                this.$forceUpdate();
                } 
        },
         prevPageClick (){ 

                console.log( ' this is paging 2 :' +this.paging[1]);
            
                if (this.paging[0] > 1 ){
                this.paging[2] = this.paging[0] - 1 ;
                this.paging[1] = this.paging[2] - 1 ;
                this.paging[0] = this.paging[1] - 1 ;
                this.currentPage = this.paging[2];
                document.getElementsByClassName("last")[0].classList.add("active");
                document.getElementsByClassName("first")[0].classList.remove("active");
                document.getElementsByClassName("middle")[0].classList.remove("active");
                this.$forceUpdate();
                } 
        },
         changeFirst(event){
          this.currentPage = event.target.innerHTML;
         },
         changeMiddle(event){
           this.currentPage = event.target.innerHTML;
         },
         changeLast(event){
          this.currentPage = event.target.innerHTML;
         }
  }


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
      font-size: 14px;
      font-weight: bold;
      font-weight: bold;
    }
  }

    .paging {
      margin-top: 30px;
      li {
        a {
          background-color: $color-card;
        }
      }
    }

}
</style>
