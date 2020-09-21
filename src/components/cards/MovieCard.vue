<template>
  <div class="movie-card text-center">
    <div class="card movie-card " >
      <div class="rating-container">
        <div class="rating" > 
                <span class="top-span">
                   <font-awesome-icon style="color:yellow;" icon="star"  > </font-awesome-icon>
                   {{rating}}</span><span style="font-size:15px;">\10</span> 
      </div>
      </div>
     <router-link :to="{path:'/movie/'+id}"> 
     <img  class="myimage" :src="img" alt="" />
     </router-link>

      <div class="card-body">
        <h5 class="card-title"> {{title}} </h5>
        <p id="overview-id" class="card-text" > {{overview}} </p>
             <router-link :to="{path:'/movie/'+id}"> 
             Read More
             </router-link>
        
      </div>
    </div>
  </div>
</template>

<script>  

export default {
    name: 'MovieCard',
    props: ['img','title','overview','rating','id'],
    data(){
      return {
        
      }
    }
}
</script>


<style lang="scss" scoped>

$color-main: rgba(212, 0, 255, 0.726);
$color-main-soft: rgba(212, 0, 255, 0.363);
$colo-secondary: #42b983;
$color-dark: #343a40;
$color-card:#21262c;

 .movie-card {
    margin:0 0 20px ;
    background-color:#21262c;
   // display: inline-block;

      .rating-container {
        position: relative;
              .rating {
                    position: absolute;
                    right:10px;
                    top:10px;
                    background-color: #343a40c0;
                    border-radius: 10px;
                    padding: 0 10px 0 10px;
                    span { 
                      color: $colo-secondary;
                      font-size: 25px;
                      padding: 0;
                    }
                  
                  }
      }
    
    .myimage {
      height: 420px;
    }
    
    .card-body{
     padding: 10px 3px 30px 3px;
     height: 110px;
     a{
       font-size: 14px;
     }
      
    }
   
    .card-title {
      color: white;
      margin: 0 0;

    }
    p{
      color: white;
      font-size: 13px;
      display: inline;
      padding-bottom: 40px;
    }
    
}
</style>