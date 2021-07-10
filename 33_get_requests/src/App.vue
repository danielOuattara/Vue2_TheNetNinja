<template>
  <div id="app">

    <!-- <add-blog></add-blog> -->
    <!-- <show-blog></show-blog> -->

    <!-- Make component dynamic with 2 buttons switching between components -->
    <!-- <button @click="view='add-blog'" >Add One blog</button> -->
    <!-- <button @click="view='show-blog'" >Show All blogs</button> -->

    <!-- Make component dynamic with 1 button switching between components -->
    <button v-if="!viewAddBlog" @click="view='add-blog', viewAddBlog= !viewAddBlog"> Add One blog</button>
    <button v-if="viewAddBlog"  @click="view='show-blog', viewAddBlog= !viewAddBlog" >Show All blogs</button>
    <keep-alive>
      <component v-bind:is="view"></component>
    </keep-alive>

  </div>
</template>

<script>

import addBlog from './components/addBlog.vue';
import showBlog from './components/showBlog.vue';

export default {

  components: { 
    'add-blog': addBlog,
    'show-blog': showBlog,
  },

  data () {
    return { 
      view: 'show-blog',
      viewAddBlog: false,
    }
  },

  methods: {
    changeViews() {
      this.view = 'add-blog'
      this.viewAddBlog= !this.viewAddBlog
    },

  },

}

</script>


<style lang="scss">

body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}

button {
  margin: 30px 0 0 30px;
  padding:15px;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(
    to right top, 
    rgb(192, 192, 192), 
    rgba(0, 0, 255, 0.75)
  );
  &:hover {
    // scale: 1.03;
    border: 4px solid blue;
    padding: 12px;
  }

}

</style>
