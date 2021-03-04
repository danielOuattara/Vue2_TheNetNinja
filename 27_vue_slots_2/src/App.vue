<template>
  <div id="app">
    <form-helper>
      <div slot="form-header">
        <h3> This is ht title of the form</h3>
        <p>Form information</p>

      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required>
        <input type="passeword" placeholder="password" required>

      </div>
      <div slot="form-controls">
        <button @click="handleSubmit">Submit your form</button>
      </div>

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
    'form-helper': formHelper 
   }
}
</script>

<style scoped>
h1{
    text-align: center;
}
form{
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
}
#useful-links ul{
    padding: 0;
}
#useful-links li{
    display: inline-block;
    margin-right: 10px;
}
form > div{
    padding: 20px;
    background: #eee;
    margin: 20px 0;
}
#form-header{
    background: #ddd;
    border: 1px solid #bbb;
}
</style>
