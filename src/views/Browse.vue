<template>
  <div class="browse">
    <div class="container">

          <div class="filter text-center">
            <h3> Filter Movies</h3>
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
                          <option value="action" v-for="year in movieYear" :key="year"> {{year}} </option>
                          
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
                  <div class="col-10 offset-1  col-md-6 offset-md-3 offset-lg-0 col-md-4 col-lg-4">
                 <form class="form-inline my-2 my-lg-0 myform mt-3 mt-lg-0" >
                    <input class="form-control  mr-sm-2"
                     type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
                  </div>
            </div>
          </div>

          <div style="margin:0; padding:0;" class="row">

            <div  style="margin:0; padding:0;" class="col-12 col-sm-4 col-md-3"
             v-for="movie in groupMovies" :key="movie.id">

              <img style="padding:0; margin:0; width:100%;" src="@/imgs/sh01.jpg" alt="">

              </div> 

          </div>

    </div>
      <Copyright/>
  </div>
</template>

<script>

      import Copyright from '../components/global/Copyright';



    var x = [];
  for(var i= 1900 ; i <= 2020 ; i++){
      x.push(i);
  }  

export default {

  name: 'Browse',
  data() {
    return {
      groupMovies : [ { id:1, name:'Lion King'},
                  { id:2, name:'Lion King'},
                  { id:3, name:'Lion King'},
                  { id:4, name:'Lion King'},
                  { id:5, name:'Lion King'},
                  { id:6, name:'Lion King'},
                  { id:7, name:'Lion King'},
                  { id:8, name:'Lion King'},
                  { id:9, name:'Lion King'},
                  { id:10, name:'Lion King'},
                  { id:11, name:'Lion King'},
                  { id:12, name:'Lion King'},
                  { id:13, name:'Lion King'},
                  { id:14, name:'Lion King'},
                  { id:15, name:'Lion King'},
                  { id:16, name:'Lion King'},]
                  ,
                   movieYear : x
    }
   
  },components : {Copyright}
}
</script>

<style lang="scss" scoped>
$color-main: rgba(212, 0, 255, 0.726);
$color-main-soft: rgba(212, 0, 255, 0.363);
$colo-secondary: #42b983;
 $color-dark: #343a40;
 $color-card:#21262c;
 $color-soft-text : rgb(155, 155, 155);

      .browse{
        width: 100%;
        background-color: $color-card;

        .filter {
          padding-top: 40px;
          margin-bottom: 40px;
            h3 {
              font-size: 40px;
              color: $colo-secondary;
              font-weight: bold;
              font-family: 'Times New Roman', Times, serif;margin-bottom: 30px;
            }
            select{
              background-color: $color-dark;
              color: $colo-secondary;

                    option {
                      color:$colo-secondary;
                      
                      padding: 5px;
                      
                    }
            }
            .myform{
              justify-content: flex-end;
            }
        }

      }
</style>