import Vue from 'vue'
import App from './App.vue'
import Ninjas from './Ninjas.vue'

Vue.component ('app-ninjas', Ninjas ) // Globaly registered !

new Vue({
  el: '#app',
  render: h => h(App)
})
