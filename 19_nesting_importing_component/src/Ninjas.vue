<template>

<div>
    <h2>Global registered component</h2>
    <ul>
      <li v-for="ninja in ninjas" :key=ninja> {{ ninja }} </li>
  </ul>
</div>

</template>

<script>
export default {
  data () {
    return {
      ninjas: [ "Yoshi", "Mario", "Ryu"]
    }
  },
  methods: { },
  computed: { }
}
</script>

<style lang="scss"> </style>
