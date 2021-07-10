
import showBlog  from './components/showBlog.vue'
import addBlog   from './components/addBlog.vue'
import listBlogs from './components/listBlogs.vue'

export default [
    {path: '/'   ,  component: showBlog },
    {path:'/add' ,  component: addBlog  },
    {path:'/list',  component: listBlogs}
]