<template>
    <div id="show-blog">
        <h1>All blog article</h1>

        <input type="text" v-model="search" placeholder="search blogs tilte for ...">

        <div class="single-blog" v-for="item, index in filterBlogs" :key='index'> 

            <h2 v-rainbow> {{ item.title | to-upperCase }}</h2>
            <h2> {{ item.title | toLowerCase }}</h2>
            <article> {{ item.body | snippet}}</article>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            blogs: [],
            search:''
        }
    },

    computed: {
        filterBlogs() {
            return this.blogs.filter((item) => {
                return item.title.match(this.search)
            })
        }
    },

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