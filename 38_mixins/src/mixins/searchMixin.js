
export default {
    computed: {
        filterBlogs() {
            return this.blogs.filter((item) => {
                return item.title.match(this.search)
            })
        }
    }
}
