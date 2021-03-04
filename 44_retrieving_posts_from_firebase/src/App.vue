<template>
  <div id="app">

    <app-header></app-header>
    <router-view></router-view>

  </div>
</template>



<script>

import addBlog from  './components/addBlog.vue';
import showBlog from './components/showBlog.vue';
import listBlog from './components/listBlogs.vue';
import header from './components/header.vue';

export default {
  data () {
    return {  }
  },
  
  methods: {  },
 
  components: { 
    'add-blog':   addBlog,
    'show-blog':  showBlog,
    'list-blogs': listBlog,
    'app-header': header,
   },
}


</script>



<style lang="scss">

body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}

</style>
