<template>
<ul>
    <li v-for="ninja in ninjas" :key="ninja"> {{ ninja }} </li>
</ul>
</template>

<script>
export default {
  data () {
    return {
      ninjas: [ "Yoshi", "Mario", "Ryu"]
    }
  },
  methods: { },
  computed: {}
}
</script>

<style lang="scss"> </style>
