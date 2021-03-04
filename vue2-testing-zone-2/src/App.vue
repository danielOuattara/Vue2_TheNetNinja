<template>
  <div id="app">
    <h1> {{ title }}</h1>
    <p> {{sayHello() }}</p>
    <p> {{ greetings()}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: "Vue 2.x Tutorial 18",
      sayHello() {
        return "Say Hello !";
      }

    }
  },
  methods: {
    greetings() {
      return " Say greetings !"
    }
  },
  computed: {}
}
</script>

<style lang="scss">

</style>
