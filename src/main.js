import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import bootstrap 
import "bootstrap";
// import css main;
import "./scss/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import fonts file
import './fonts/fonts';


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  methods: {
        seeele (){
        }
  } ,
  mounted: function () {
    this.$nextTick(function () {
    
    })
  }
 
}).$mount("#app");
