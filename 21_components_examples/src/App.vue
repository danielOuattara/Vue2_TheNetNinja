<template>
  <div id="app">
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Main   from './components/Main.vue';

export default {
  
  data () {
    return { }
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
