<template>
  <div id="app">
    <show-blog></show-blog>
  </div>
</template>

<script>

import addBlog from './components/addBlog.vue';
import showBlog from './components/showBlog.vue';

export default {
  components: { 
    'add-blog': addBlog,
    'show-blog': showBlog
   },
}
</script>

<style lang="scss">
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
