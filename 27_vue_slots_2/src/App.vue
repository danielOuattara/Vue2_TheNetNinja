<template>
  <div id="app">
    <hr>
    <form-helper>
      <div slot='form'>
        <h2>Please, fill out the form</h2>
        <div>
          <h3> This is the title of the form</h3>
          <p>Form information</p>
        </div>

        <form action="">
          <div>
            <label for="name"> Enter your name :</label>
            <input type="text" name="name" placeholder="name" required>
          </div>

          <div>
            <label for="password"> Enter your password :</label>
            <input type="passeword" placeholder="password" required>
          </div>

          <div>
            <button @click="handleSubmit">Submit your form</button>
          </div>

        </form>
        <div>
          <ul>
            <li><a href="#">link 1</a></li>
            <li><a href="#">link 2</a></li>
            <li><a href="#">link 3</a></li>
            <li><a href="#">link 4</a></li>
          </ul>
        </div>
      </div>
      

    </form-helper>

    <hr>   

    <form-helper2>
        <div slot='form'>
        <h2>Please, fill out the form</h2>
        <div>
          <h3> This is the title of the form</h3>
          <p>Form information</p>
        </div>

        <form action="">
          <div>
            <label for="name"> Enter your name :</label>
            <input type="text" name="name" placeholder="name" required>
          </div>

          <div>
            <label for="password"> Enter your password :</label>
            <input type="passeword" placeholder="password" required>
          </div>

          <div>
            <button @click="handleSubmit">Submit your form</button>
          </div>

        </form>
        <div>
          <ul>
            <li><a href="#">link 1</a></li>
            <li><a href="#">link 2</a></li>
            <li><a href="#">link 3</a></li>
            <li><a href="#">link 4</a></li>
          </ul>
        </div>
      </div>

    </form-helper2>

    <hr>

    <form-helper3>
        <div slot='form'>
        <h2>Please, fill out the form</h2>
        <div>
          <h3> This is the title of the form</h3>
          <p>Form information</p>
        </div>

        <form action="">
          <div>
            <label for="name"> Enter your name :</label>
            <input type="text" name="name" placeholder="name" required>
          </div>

          <div>
            <label for="password"> Enter your password :</label>
            <input type="passeword" placeholder="password" required>
          </div>

          <div>
            <button @click="handleSubmit">Submit your form</button>
          </div>

        </form>
        <div>
          <ul>
            <li><a href="#">link 1</a></li>
            <li><a href="#">link 2</a></li>
            <li><a href="#">link 3</a></li>
            <li><a href="#">link 4</a></li>
          </ul>
        </div>
      </div>

    </form-helper3>

    <hr>
  </div>
</template>

<script>

import formHelper from './components/formHelper.vue'
import formHelper2 from './components/formHelper2.vue'
import formHelper3 from './components/formHelper3.vue'




export default {
    components: {
    'form-helper': formHelper, 
    'form-helper2': formHelper2, 
    'form-helper3': formHelper3 
   },

  data () {
    return { 
      title: "I am a dynamic title "
    }
  },

  methods: {  },

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
