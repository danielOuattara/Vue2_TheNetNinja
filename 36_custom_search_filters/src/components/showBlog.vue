<template>
    <div id="show-blogs">
        <h1>All blog article</h1>
        <input type="text" name="searchTitle" v-model="search" 
               placeholder="Search by blog title..."/>
        <div class="single-blog" v-for="item, index in filteredBlogs" :key="index"> 
            <h2> {{ item.title | to-upperCase }}</h2>
            <article> {{ item.body | snippet}}</article>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                blogs: [] ,
                search:'' , 
             }
        },

        computed: {
            filteredBlogs: function() {
                return this.blogs.filter( item => {
                    return item.title.match(this.search)
                })
            }
        },

        methods: { },

        created() {
            this.$http.get('http://jsonplaceholder.typicode.com/posts')
            .then( (data)=> {
                console.log(data);
                this.blogs = data.body.slice(0,25);
            })
            .catch(err=> { console.log(err.message)})
        }
    }

</script>

<style lang="scss">

#show-blogs{
    max-width: 800px;
    margin: 0px auto;
    input {
        width: 100%;
        height: 30px;
        display: inline;
    }   
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>