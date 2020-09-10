
<template>
    <div class="header">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand ml-2 mr-2 mt-1 mb-1" id="brand-logo" href="#">Book<span>store</span></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <ul class="navbar-nav  top-pages d-flex ">
      <li class="nav-item mr-2 active">
        <a class="nav-link page-selector"> <router-link to="/">Home</router-link> <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item  mr-2  ">
        <a class="nav-link page-selector"><router-link to="/about">About</router-link></a>
      </li>
    </ul>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    
    <form class="form-inline ml-auto search-form my-2 my-lg-0">
      <input class="form-control mr-sm-2 search-input" type="search" placeholder="Search" aria-label="Search">
      <button class="btn  my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
</template>


<script>
export default {
    name : 'Header'
}
</script>

<style lang="scss" scoped>


$color-main : rgba(212, 0, 255, 0.726) ;
$color-main-soft : rgba(212, 0, 255, 0.363) ;
$colo-secondary : #42b983;
$color-dark: rgba(107, 107, 107, 0.096);

.header {

    .top-pages {
        display: flex;
        -ms-flex-direction: row;
        flex-direction: row; 
    }    
    a {
        font-weight: bold;
        color: $color-main;
        padding: 10px;
        text-decoration: none;
        &.router-link-exact-active {
        color: $colo-secondary ;
        background-color:$color-dark;
        border-radius: 40%;
        border: 2px solid $color-main-soft
        }
    }

    ul {
        position: absolute;
        top: 5 ;
        left:45%;
        li{
            
        }
    }
    #brand-logo{
        color: $color-main;
        font-size: 30px;
        span{
            font-size: 20px;
            color: $colo-secondary;
        }
    }
    // .page-selector{
    //     color:$color-main;
    // }

    .search-input{
        border: 2px solid $colo-secondary;
        box-shadow: $colo-secondary;
    }
    .search-form{
        button {
   border: 1px solid$color-main;
        color: $color-main;
        }
     
    }

}
</style>