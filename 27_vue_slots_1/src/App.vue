<template>
  <div id="app">
    <form-helper>
      <h2 slot="title">I am the slot title</h2>
      <h2 slot="dynamic-title"> {{ title }} </h2>
      <p slot="paragraph"> Paragraph text for the slot</p>

    </form-helper>
  </div>
</template>

<script>

import formHelper from './components/formHelper.vue'

export default {
  data () {
    return { 
      title: "I am a dynamic title "
    }
  },

  methods: {  },

  components: {
    'form-helper': formHelper ,
   }
}
</script>

<style lang="scss">

  //   #slot-title {
  //       color: green;
  //   }

  //  [slot=p-1] {
  //     color: blue
  //   }

  //  p[slot=p-2] {
  //     color: blue
  //   }

</style>
