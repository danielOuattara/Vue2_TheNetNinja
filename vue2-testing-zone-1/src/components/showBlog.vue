<template>
    <div id="show-blogs">
        <h1>All blog article</h1>

        <input type="text" v-model="search" placeholder="search blogs tilte for ...">

        <div class="single-blog" v-for="item in filterBlogs"> 

          <router-link v-bind:to="'/blog/' + item.id">   <h2> {{ item.title | to-upperCase }}</h2> </router-link>
            <article> {{ item.content | snippet}}</article>
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

        methods: { },

        created() {
            this.$http.get("https://vue-blog-6f77f-default-rtdb.firebaseio.com/posts.json")
            .then( (data)=> {
                return (data.json());
                // this.blogs = data.body;
            })
            .then( (data) => {  
                console.log(data) 
                let blogsArray = [];
                for (let key in data) {
                    // console.log(key);
                    // console.log(data[key])
                    data[key].id = key
                    blogsArray.push(data[key]);
                }
                // console.log(blogsArray)
                this.blogs = blogsArray;



            })
            .catch()
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
    }
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
    border-radius: 7px;
    border: 1px solid #cecece;

    a {
        text-decoration: none;
    }
}


</style>