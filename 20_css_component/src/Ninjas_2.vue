
<template>
  <div>
    <h1> List of Real Ninjas</h1>
    <ul>
      <li v-for="ninja in ninjas" :key="ninja"> {{ ninja }} </li>
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

<style scoped lang="scss">

    h1 {
      color: rgb(174, 174, 6);
    }

</style>
