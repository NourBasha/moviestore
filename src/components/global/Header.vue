
<template>
    <div class="header" ref="mynavbar">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  
        <router-link to="/"> 
        <a class="navbar-brand ml-2 mr-2 " id="brand-logo" href="#">Movie<span>store</span>
        </a>
        </router-link> 

        <ul class="navbar-nav  top-pages flex-row ml-auto ">
            <li class="nav-item mr-2 active">
                <a class="nav-link page-selector home-selector"> 
                    <router-link to="/">Home</router-link> 
                    <span class="sr-only">(current)</span>
                </a>
            </li>

            <li class="nav-item  mr-2  ">
                <a class="nav-link page-selector movie-selector"><router-link to="/browse">Movies</router-link></a>
            </li>

        </ul>
        
        </nav>
   </div>
</template>


<script>
export default {
    name : 'Header',
     methods: {
        matchHeight() {
            // var heightString = this.$refs.mynavbar.clientHeight + 'px';
            // console.log("height string is : " + heightString);
            // // Vue.set(this.leftColStyles, 'height', heightString); 
        }
    },
    mounted() {
        this.matchHeight();
    }
}
</script>
