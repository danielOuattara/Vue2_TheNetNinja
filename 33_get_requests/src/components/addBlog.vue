<template>
    <div id="add-blog">

        <h2 v-if="!submitted">Please, add a new Blog post</h2>

        <form v-if="!submitted" action="">
            <label for="">Blog Title :</label>
            <input type="text" required v-model="blog.title"/> 

            <label for="">Blog Content :</label>
            <textarea name="" id="" cols="80" rows="3" v-model="blog.content"></textarea>

            <div id="checkboxes">
                <label for="">Ninjas</label>
                <input type="checkbox" value="ninjas"  v-model="blog.categories">

                <label for="">Wizards</label>
                <input type="checkbox" value="wizards" v-model="blog.categories">

                <label for="">Mario</label>
                <input type="checkbox" value="mario"   v-model="blog.categories">

                <label for="">Cheese</label>
                <input type="checkbox" value="cheese"  v-model="blog.categories">
            </div>
            
            <label for="author">Author :</label>
            <select name="author" id="author" v-model="blog.author">
                <option  v-for="item, index in authors" :key="index" > {{ item }}</option>
            </select>

            <button @click.prevent="post">Submit</button>
        </form>

        <div v-if="submitted">
            <h3>Thanks for your post</h3>
        </div>

        <div id="preview" v-if="!submitted">
            <h3>Preview Blog</h3>
            <p> Blog tilte : {{ blog.title }}</p>
            <p> Blog content : {{ blog.content }} </p>
            <p>Blog categories</p>
            <ul>
                <li v-for="category in blog.categories" :key="category"> {{category }}</li>
            </ul>
            <p>Author : {{ blog.author}}</p>
        </div>
    </div>
</template>


<script>

    export default {
        data () {
            return { 
                blog: {
                    title:"",
                    content:"",
                    categories: [],
                    author: ""
                },

                authors: ['The Net Ninja', 'Vues2JS', 'React', 'Angular'],
                submitted: false
            }
        },

        methods: {
            post(){
                this.$http.post("http://jsonplaceholder.typicode.com/posts", {
                    title: this.blog.title,
                    body: this.blog.content,
                    userId: 1
                })
                .then( (data) => { 
                    console.log(data)
                    this.submitted= true
                })
                .catch( error => json.parse(error))
            }
        }
    }

</script>






<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}
</style>