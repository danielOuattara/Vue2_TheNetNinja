<template>
    <div id="single-blog">
        <h1> {{ blog.title }} </h1>
        <article> {{  blog.content }}</article>
        <p>Author: {{blog.author }}</p>
        <ul>
            <li v-for="category, index in blog.categories" :key='index'> {{ category}}</li>
        </ul>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            blog: {}
        }
    },
    created() {
        this.$http.get('https://vue-blog-6f77f-default-rtdb.firebaseio.com/posts/'+ this.id + '.json')
        .then( (data) => {
            // console.log(data);
            // this.blog = data.content
            return data.json()          
        })
        .then( (data)=> { this.blog = data})
        .catch()
    }
}
</script>

<style lang="scss" scoped>
    #single-blog {
        max-width: 900px;
        margin: 0 auto;
    }
</style>