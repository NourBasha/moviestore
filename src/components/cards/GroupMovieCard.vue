<template>
  <div class="group-movie-card ">
    <div class="card  " >
      <img   :src="require(`@/imgs/${imgsrc2}.png`)" alt="" />
      <div class="card-body pt-2 pb-2 pl-0 pr-0">
        <h5 class="card-title"> {{name}} </h5>
        <p class="card-text"> 5/10
        </p>
        <a href="#" class="btn  btn-light">Check it Out</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'GroupMovieCard',
    props: ['imgsrc2','name']
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
    h5{
    font-size: 16px;
      color: white;
      width: 100%;
      font-weight: bold;

    }
    p{
      color: white;
    }
}
</style>