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
          <div class="col-12 col-md-6 col-lg-4 " v-for="item in items" :key="item.id">
            <MovieCard :imgs="imgsrc" :name="item.name" />
          </div>
        </div>
      </div>
    </div>

    <!--  end of latest -->


    <!--  start of groups -->

    <div class="groups">
      <div class="container-fluid">
        <h4 class="group-h4">Our Movies</h4>
      <div class="row first-category-row" style="margin:0; padding:0;">
        <div style="margin:0; padding:0;" class="col-md-3 " 
        v-for="movie in groupMovies" :key="movie.id" >
              <img style="padding:0; margin:0; width:100%;" src="@/imgs/sh01.jpg" alt="">
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


        <div class=" text-left copy-right ">
          <div class="container">
          <p> COPYRIGHT &copy; Bookstore | All Rights Reserved.</p>

          </div>
        </div>



    <!-- end of footer  -->

  </div>
</template>

<script>
import MovieCard from "../components/cards/MovieCard";
//import GroupMovieCard from '../components/cards/GroupMovieCard'

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
        { id: 4, name: "Titanic" },
         { id: 5, name: "Titanic" },
        { id: 6, name: "The Hateful Eight" },
        { id: 7, name: "Titanic" }
        ],
        imgsrc2 : "sh02"
    };
  },

  components: {
    MovieCard
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


$color-main: rgba(212, 0, 255, 0.726);
$color-main-soft: rgba(212, 0, 255, 0.363);
$colo-secondary: #42b983;
 $color-dark: #343a40;
 $color-card:#21262c;
 $color-soft-text : rgb(155, 155, 155);
// footer 

.footer {

        padding: 30px 0;

    .footer-brand {

         #brand-logo {
            color: $color-main;
            font-size: 40px;
            text-decoration: none;
            span {
              font-size: 20px;
              color: $colo-secondary;
            }
          }

          p{
            color:  $color-soft-text
          }
    }

    .helpful-links {
     
      h6{
        color: $colo-secondary;
        font-size: 25px;
         margin-bottom: 15px;
         margin-top: 15px;
      }
      ul {
        list-style: none;
        padding: 0;
        li {
          a {
            color:  $color-soft-text ;
          }
        }
      }
    }

    .footer-address {
      h6{
        color: $colo-secondary;
        font-size: 25px;
         margin-top: 15px;
         margin-bottom: 15px;


      }
      ul {
        list-style: none;
        color: $color-soft-text;
        padding: 0;
      }
    }



}


// footer 


  
  .copy-right {
      background-color:$color-card;
      padding:20px 0 20px 0 ;
      p{
        color: $color-soft-text;
        font-size: 14px;
        font-weight: bold;
        padding: 0;
        margin: 0;
      }
  }


</style>