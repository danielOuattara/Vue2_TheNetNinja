<template>
  <div id="app">
    <list-blogs></list-blogs> -->
    <button  @click="view='add-blog', viewAddBlog= !viewAddBlog, viewShowBLog=!viewShowBLog"> Add One blog</button>
    <button  @click="view='show-blog', viewAddBlog= !viewAddBlog" >Show All blogs</button>
    <button  @click="view='list-blog', viewAddBlog= !viewAddBlog" >Show List blogs</button>
    <keep-alive>
      <component v-bind:is="view"></component>
    </keep-alive>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue';
import showBlog from './components/showBlog.vue';
import listBlogs from './components/listBlogs';

export default {

    components: { 
    'add-blog': addBlog,
    'show-blog': showBlog,
    'list-blog': listBlogs
   },
  data () {
    return { 
      view: 'add-blog',
      viewAddBlog: true,
      viewShowBLog: true,
      viewListBLog: true
     }
  },
  methods: {  },
}
</script>

<style lang="scss">

body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}

</style>
