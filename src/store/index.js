import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movieID: 0
  },
  getters : {
      // getMovieID : (state) => { // selected movie id from browser or home
      //   return state.movieID
      // }
  },
  mutations: {
    // setMovieID : (state, id) => { // set selected movie id from browser or home
    //     state.movieID = id 
    //     console.log('inside store, id :'+state.movieID)
    // }
  },
  actions: {},
  modules: {}
});


