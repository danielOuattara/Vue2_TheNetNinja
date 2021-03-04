<template>
    <div>
        <h1>Please, fill out the form</h1>
        <form action="">
            <div id="form-header">
                <slot name="form-header"></slot>
            </div>

            <div id="form-fields">
                <slot name="form-fields"></slot>
            </div>

            <div id="form-controls">
                <slot name="form-controls"></slot>
            </div>

            <div id="useful-links">
                <ul>
                    <li><a href="">link 1</a></li>
                    <li><a href="">link 2</a></li>
                    <li><a href="">link 3</a></li>
                    <li><a href="">link 4</a></li>
                </ul>
            </div>
        </form>
    </div>
</template>


<script>
export default {

    components: {},

    data() {
        return {}
    },

    methods: {},
    
}
</script>



<style lang="scss">

</style>