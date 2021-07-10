import Vue         from 'vue';
import App         from './App.vue';
import VueResource from 'vue-resource';
import VueRouter   from 'vue-router';
import Routes      from './routes.js';


Vue.use(VueResource);
Vue.use(VueRouter);


const router = new VueRouter({
  mode: 'history',
  routes: Routes  // add this line to use 'history' mode
});


new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
