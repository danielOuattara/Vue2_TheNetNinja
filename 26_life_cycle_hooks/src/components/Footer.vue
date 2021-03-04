<template>
    <footer>
        <p> {{ copyright + " & " + title }}</p>
    </footer>
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
        copyright: 'Copyright 2021 Vue Ninjas'
    }
  },

  methods: { },

  computed: {},

  created() {
    busEvent.$on('busTitleEvent', (data)=> {
      this.title= data;
    })
  }
}
</script>

<style lang="scss" scoped>

  footer {
      background: #222;
      padding: 20px;
  }

  p {
    color: lightgreen;
    text-align: center;
  }

</style>

