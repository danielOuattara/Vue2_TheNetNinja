<template>
    <div id="add-blog">


        <!-- <h2>Add a new Blog Post 1</h2>

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
        </div> -->




        <h2>Add a new Blog Post 2</h2>

        <form action="">
            <label for="">Blog Title :</label>
            <input type="text" required v-model="blog.title"/> 

            <label for="">Blog Content :</label>
            <textarea name="" id="" cols="80" rows="3" v-model="blog.content"></textarea>

            <div id="checkboxes">
                <label for="">Ninjas</label>
                <input type="checkbox" value="ninjas" v-model="blog.categories">
                <label for="">Wizards</label>
                <input type="checkbox" value="wizards" v-model="blog.categories">
                <label for="">Mario</label>
                <input type="checkbox" value="mario" v-model="blog.categories">
                <label for="">Cheese</label>
                <input type="checkbox" value="cheese" v-model="blog.categories">
     
            </div>
        </form>

        <div id="preview">
            <h3>Preview Blog</h3>
            <p> Blog tilte : {{ blog.title }}</p>
            <p> Blog content : {{ blog.content }} </p>
            <p>Blog categories</p>
            <ul>
                <li v-for="category in blog.categories"> {{category }}</li>
            </ul>
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
                    categories: []
                },
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