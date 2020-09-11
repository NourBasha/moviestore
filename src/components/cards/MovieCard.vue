<template>
  <div class="movie-card text-center">
    <div class="card  " >
      <img   :src="require(`@/imgs/${imgs}.jpg`)" alt="" />
      <div class="card-body">
        <h5 class="card-title"> {{name}} </h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn  btn-light">Get this movie</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'MovieCard',
    props: ['imgs','name']
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
    
    .card-body{
      padding-left: 3px;
      padding-right: 3px;
      margin-top: 10px;
      margin-bottom: 10px;
      
    }
   
    h5{
      color: white;

    }
    p{
      color: white;
      
    }
    
}
</style>