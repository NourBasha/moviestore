
<template>
    <div class="header" ref="mynavbar">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand ml-2 mr-2 " id="brand-logo" href="#">Movie<span>store</span></a>
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
    
    <form class="form-inline ml-auto  search-form my-2 my-lg-0">
      <input class="form-control mr-sm-2 search-input" type="search" placeholder="Search" aria-label="Search">
      <button class="btn  my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
</template>


<script>
export default {
    name : 'Header',
     methods: {
        matchHeight() {
            var heightString = this.$refs.mynavbar.clientHeight + 'px';
            console.log("height string is : " + heightString);
            // Vue.set(this.leftColStyles, 'height', heightString); 
        }
    },
    mounted() {
        this.matchHeight();
    }
}
</script>

<style lang="scss" scoped>

</style>