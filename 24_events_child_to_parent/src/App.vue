<template>
  <div id="app">
    <app-header v-bind:title="title" v-on:changeTitleEvent="updateTitle($event)"></app-header>
    <app-main v-bind:ninjas="superninjas"></app-main>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Main   from './components/Main.vue';

export default {

    components: {
    'app-header': Header ,
    'app-footer': Footer ,
    'app-main':   Main
  },
  
  data () {
    return { 
        superninjas: [
            { name:'Ryu'     , speciality: 'Vue Components', show:'false' } ,
            { name:'Crystall', speciality: 'HTML Wizardry' , show:'false' } ,
            { name:'Hitoshi' , speciality: 'Click Events'  , show:'false' } ,
            { name:'Tango'   , speciality: 'Conditionals'  , show:'false' } ,
            { name:'Kami'    , speciality: 'Webpack'       , show:'false' } ,
            { name:'Yoshi'   , speciality: 'Data Diggin'   , show:'false' } ,
        ],
        title: "Vue and Ninjas"
    }
  },

  methods: {
    updateTitle(value) {
      this.title = value
    }
  },


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
