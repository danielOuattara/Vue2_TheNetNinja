<template>
    <div id="add-blog">


        <h2>Add a new Blog Post 1</h2>

        <form action="">
            <label for="">Blog Title :</label>
            <input type="text" required v-model="title_1"/> 

            <label for="">Blog Content :</label>
            <textarea name="" id="" cols="80" rows="3" v-model="content_1"></textarea>
        </form>

        <div id="preview">
            <h3>Preview Blog</h3>
            <p> Blog tilte : {{ title_1 }}</p>
            <p> Blog content : {{ content_1 }} </p>
        </div>




        <h2>Add a new Blog Post 2</h2>

        <form action="">
            <label for="">Blog Title :</label>
            <input type="text" required v-model="blog_2.title"/> 

            <label for="">Blog Content :</label>
            <textarea name="" id="" cols="80" rows="3" v-model="blog_2.content"></textarea>
        </form>

        <div id="preview">
            <h3>Preview Blog</h3>
            <p> Blog tilte : {{ blog_2.title }}</p>
            <p> Blog content : {{ blog_2.content }} </p>
        </div>




        <h2>Add a new Blog Post 3</h2>

        <form action="">
            <label for="">Blog Title :</label>
            <input type="text" required v-model.lazy="blog_3.title"/> 

            <label for="">Blog Content :</label>
            <textarea name="" id="" cols="80" rows="3" v-model.lazy="blog_3.content"></textarea>
        </form>

        <div id="preview">
            <h3>Preview Blog</h3>
            <p> Blog tilte : {{ blog_3.title }}</p>
            <p> Blog content : </p>
            <p> {{ blog_3.content }} </p>
        </div>


    </div>
</template>



<script>

    export default {
        data () {
            return { 

                title_1:"",
                content_1:"",

                blog_2: {
                    title:"",
                    content:""
                },

                blog_3: {
                    title:"",
                    content:""
                }
             }
    },
    methods: {  },

    components: {  }
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
</style>