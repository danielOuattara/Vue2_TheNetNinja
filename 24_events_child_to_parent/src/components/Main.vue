<template>

    <div id="ninjas">
        <ul>
            <li v-for="ninja in ninjas" @click="ninja.show=!ninja.show">
                <h2> {{ ninja.name }}</h2>
                <h3 v-show="ninja.show"> {{ ninja.speciality }}</h3>
            </li>
        </ul>

        <button @click="deleteNinja">Delete One Ninja</button>

    </div>

</template>

<script>

    export default {

        // receive props with no validation
        // props:["ninjas"],

        // receive 'props' with validation
        props: {
            ninjas: {
                type: Array,
                required: true
            }
        },

        data () {
            return {}
        },
        methods: {
            // ???
            // test() {
            // return this.ninjas
            // }

            deleteNinja() {
                this.ninjas.pop()

            }

        },
        computed: {} 
    }
</script>

<style lang="scss" scoped>

 #ninjas {
     width: 100%;
     max-width: 1200px;
     margin: 40px auto;
     padding: 0 20px;
     box-sizing: border-box;
    
 }

 ul {
     display: flex;
     flex-wrap: wrap;
     list-style-type: none;
     padding: 0;

     li {
        flex-grow: 1;
        flex-basis: 300px;
        text-align: center;
        padding: 30px;
        border: 1px solid rgb(109, 109, 109);
        margin: 10px;
        border-radius: 7px;
        cursor: pointer;
        &:hover {
            background: rgb(100, 100, 100);
            color: #fff;
            border: 1px solid rgb(255, 255, 255);
     }
 }



 }

</style>

