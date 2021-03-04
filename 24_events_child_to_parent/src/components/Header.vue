<template>
    <header>
        <h1 @click="changeTitle"> {{ title }}</h1>
        
        
    </header>
</template>

<script>

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
    changeTitle() {  // Avoid mutating a prop ! See 
      this.$emit('changeTitleEvent', 'Vue & Super Ninja')
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

