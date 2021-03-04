<template>
  <div id="app">

    <show-blog></show-blog>
    <list-blogs></list-blogs>

  </div>
</template>



<script>

import addBlog from './components/addBlog.vue';
import showBlog from './components/showBlog.vue';
import listBlog from './components/listBlogs';

export default {
  data () {
    return {  }
  },
  methods: {  },

  components: { 
    'add-blog': addBlog,
    'show-blog': showBlog,
    'list-blogs': listBlog
   },
}


</script>



<style lang="scss">

body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}

</style>
