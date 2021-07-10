<template>
    <header>
        <h1> {{ title }}</h1>
    </header>
</template>

<script>

export default {
  data () {
    return {
        title: 'Vue Ninja'
    }
  },

  methods: { },
  computed: { }
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

