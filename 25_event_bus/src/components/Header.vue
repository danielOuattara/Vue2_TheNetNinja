<template>
    <header>
        <h1 @click="changeTitle"> {{ title }}</h1>
        
        
    </header>
</template>

<script>
import { busEvent } from './../main.js'
export default {
  props: {
    title: {
      type: String,
    }

  },
  data () {
    return {
        // title: 'Vue Ninja'
    }
  },

  methods: { 
    changeTitle() {  // 
      this.title = 'Vue & Super Ninja using Bus Event'; 
      busEvent.$emit('busTitleEvent', 'Vue & Super Ninja using Bus Event')
    }
  },

  computed: {}
}
</script>

<style lang="scss" scoped>

  header {
      background: lightgreen;
      padding: 30px;
  }

  h1 {
    color: #222;
    text-align: center;
  }

</style>

