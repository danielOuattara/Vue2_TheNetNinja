import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';



Vue.use(VueResource);

// custom  global filters

Vue.filter('to-upperCase', (value) => {
  return value.toUpperCase()
})

Vue.filter('snippet', (value) => {
  return value.slice(0, 80) + '...';
})


new Vue({
  el: '#app',
  render: h => h(App)
})
