<template>
    <div id="show-blog">
        <h1>List Blog Titles</h1>
        <input type="text" v-model="search" placeholder="search blogs tilte for ...">
        <div class="single-blog" v-for="item, index in filterBlogs" :key="index">
            <router-link v-bind:to="'/blog/' + item.id"> 
                <h2 v-rainbow> {{ item.title | to-upperCase }}</h2>
                <h2> {{ item.title | toLowerCase }}</h2>
             </router-link>
             <article> {{ item.body | snippet}}</article>
        </div>
    </div>
</template>

<script>
    import searchMixin from './../mixins/searchMixin.js'
    export default {
        data () {
            return {
                blogs: [],
                search:''
             }
        },
        computed: { },
        filters: {
            'to-upperCase': function(value) {
                return value.toUpperCase()
            },

            toLowerCase(value) {
                return value.toLowerCase();
            },

            'snippet': (value) => {
                return value.slice(0, 80) + '...';
            }
        },

        directives: {
            'rainbow': {
                bind(el, binding, vnode) {
                    el.style.color = '#' + Math.random().toString().slice(2, 8);
                }
            }
        },

        mixins: [searchMixin],
        methods: {},
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