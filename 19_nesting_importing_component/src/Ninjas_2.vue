
<template>
<div>
    <h2>Locally registered component</h2>
    <ul>
      <li v-for="ninja in ninjas" :key=ninja> {{ ninja }} </li>
  </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      ninjas: [ "VanDamne", "Bruce Lee", "Jackie Chang"]
    }
  },
  methods: { },
  computed: {}
}
</script>

<style lang="scss"> </style>
