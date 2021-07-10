
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
  #app {
    border: 1px solid blue;
    background: rgba(247, 88, 88, 0.5);
    padding: 20px;
    margin: 30px;
    border: none;
    border-radius: 10px;
    &:hover {
      cursor: pointer;
    background: rgba(247, 88, 88, 0.8);
    }
  } 
</style>
