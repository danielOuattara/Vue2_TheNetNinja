<template>
  <div id="app">
    <h1> {{ title }}</h1>
    <app-ninjas></app-ninjas>
    <app-ninjas-2></app-ninjas-2>

  </div>
</template>

<script>
import Ninjas_2 from './Ninjas_2.vue'
export default {
  data () {
    return {
      title: "Ninja App",
    }
  },

  components: {
    'app-ninjas-2': Ninjas_2,
  },
  methods: { },

  computed: {}
}
</script>

<style lang="scss">

  h1 {
    color: purple;
  }

</style>
