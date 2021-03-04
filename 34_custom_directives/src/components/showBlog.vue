<template>
    <div v-theme:column="'narrow'" id="show-blog">
        <h1>All blog article</h1>
        <div class="single-blog" v-for="item in blogs"> 
            <h2 v-rainbow> {{ item.title }}</h2>
            <article> {{ item.body}}</article>
        </div>
    </div>
</template>


<script>

    export default {
        data () {
            return {
                blogs: []
             }
        },

        methods: { },

        created() {
            this.$http.get('http://jsonplaceholder.typicode.com/posts')
            .then( (data)=> {
                console.log(data);
                this.blogs = data.body.slice(0,10);
            })
            .catch()
        }
    }

</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>