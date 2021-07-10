import Vue         from 'vue';
import App         from './App.vue';
import VueResource from 'vue-resource';
import VueRouter   from 'vue-router';
import Routes      from './routes.js';

Vue.use(VueResource);
Vue.use(VueRouter);


const router = new VueRouter({
  mode: 'history', // add this line to use 'history' mode
  routes: Routes  
});


new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
})
