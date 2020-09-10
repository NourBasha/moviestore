<template>
  <div id="app">
    <div id="nav">
       <Header/>
    </div>

    <router-view />
  </div>
</template>

<script>
import Header from './components/global/Header';

export default {
  name: 'App',
  components : {
    Header
  }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  // padding: 30px;

}
</style>
