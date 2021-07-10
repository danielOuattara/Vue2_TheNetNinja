<template>
  <div id="app">
      <h2>I am a title</h2>
      <h2> {{ title }} </h2>
      <p> Paragraph text</p>

      <hr>

      <form-helper>
        <h2 slot="title">I am the slot title from App.vue</h2>
        <h2 slot="dynamic-title"> {{ title }}</h2>
        <p slot="paragraph"> Paragraph text for the slot from App.vue</p>
        <p slot="paragraph"> Paragraph text for the slot from App.vue</p>
      </form-helper> 
  </div>
</template>

<script>

import formHelper from './components/formHelper.vue'

export default {

  components: {
    'form-helper': formHelper ,
   },

  data () {
    return { 
      title: "I am a dynamic title "
    }
  },

  methods: {  },


}
</script>

<style lang="scss">

    #app {
      border: 2px solid green;
      border-radius: 10px;
      padding: 30px;
      margin: 30px;
    }


    #slot-title {
        color: green;
    }

   [slot=p-1] {
      color: blue
    }

   p[slot=p-2] {
      color: blue
    }

    h2[slot="dynamic-title"] {
      color: red;
    }

</style>
