<template>
  <div id="app">
    <app-header></app-header>
    <app-main v-bind:ninjas="ninjas"></app-main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Main   from './components/Main.vue';

export default {
  data () {
    return { 
        ninjas: [
            { name:'Ryu'     , speciality: 'Vue Components', show:'false' } ,
            { name:'Crystall', speciality: 'HTML Wizardry' , show:'false' } ,
            { name:'Hitoshi' , speciality: 'Click Events'  , show:'false' } ,
            { name:'Tango'   , speciality: 'Conditionals'  , show:'false' } ,
            { name:'Kami'    , speciality: 'Webpack'       , show:'false' } ,
            { name:'Yoshi'   , speciality: 'Data Diggin'   , show:'false' } ,
        ]
    }
  },

  methods: { },

  components: {
    'app-header': Header ,
    'app-footer': Footer ,
    'app-main':   Main
  }
}
</script>

<style lang="scss">
  * {

    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1 {
    color: blue;
  }

</style>
