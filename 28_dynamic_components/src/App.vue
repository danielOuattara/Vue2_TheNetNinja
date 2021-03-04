<template>
  <div id="app">

    <!-- <form-helper></form-helper> -->

    <!-- <form-one></form-one>
    <form-two></form-two> -->
    <keep-alive>
    <component v-bind:is="component"></component>
    </keep-alive>
    <button @click="component='form-one'">Show form one</button>
    <button @click="component='form-two'">Show form two</button>

  </div>
</template>

<script>

// import formHelper from './components/formHelper.vue'
import formOne from './components/formOne.vue'
import formTwo from './components/formTwo.vue'

export default {
  data () {
    return { 
      title: "I am a dynamic title ",
      component: 'form-two'
    }
  },
 
  methods: {  },

  components: {
    // 'form-helper': formHelper ,
    'form-one': formOne,
    'form-two': formTwo,
   }
}
</script>

<style lang="scss">

body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}

</style>
