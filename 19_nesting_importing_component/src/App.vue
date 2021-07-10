<template>
  <div id="app">
    <h1> {{ title }}</h1>
    
    <app-ninjas id="app-ninjas"></app-ninjas>

    <app-ninjas-2 id="app-ninjas-2"></app-ninjas-2>

  </div>
</template>

<script>

import ninjas2 from './Ninjas_2.vue';

export default {
  data () {
    return {
      title: "Ninja App",
    }
  },

  components: {
    'app-ninjas-2': ninjas2,

  },
  methods: { },
  computed: {}
};

</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
#app {
  min-height: 100vh;
  background: rgba(255, 0, 0, 0.22);
  padding: 5vh;
}

#app-ninjas {
  border: 1px solid gray;
  padding: 20px;
  margin: 20px;

}

#app-ninjas-2 {
  border: 1px solid rgb(12, 79, 72);
  padding: 20px;
  margin: 20px;

}


</style>
