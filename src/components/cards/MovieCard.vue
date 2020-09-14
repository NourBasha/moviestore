<template>
  <div class="movie-card text-center">
    <div class="card  " >
      <img  class="myimage" :src="img" alt="" />
      <div class="card-body">
        <h5 class="card-title"> {{title}} </h5>
        <p id="overview-id" class="card-text" > {{overview}} </p>
        <a href="#" >Read More</a>
      </div>
    </div>
  </div>
</template>

<script>  

export default {
    name: 'MovieCard',
    props: ['img','title','overview'],
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

 .card {
    margin:0 0 20px ;
    background-color:#21262c;
   // display: inline-block;
    
    .card-body{
      padding-left: 3px;
      padding-right: 3px;
  
      
    }
   
    .card-title {
      color: white;
      margin: 0 0;

    }
    p{
      color: white;
      font-size: 14px;
      display: inline;
    }
    
}
</style>