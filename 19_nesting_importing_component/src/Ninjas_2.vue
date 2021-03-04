
<template>
<ul>
    <li v-for="ninja in ninjas"> {{ ninja }} </li>
</ul>
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

<style lang="scss">

</style>
