<template>
  <div id="app">
    <add-blog></add-blog>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue';
export default {
  data () {
    return {  }
  },
  methods: {  },

  components: { 
    'add-blog': addBlog,
   },
}
</script>
<style lang="scss">
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
