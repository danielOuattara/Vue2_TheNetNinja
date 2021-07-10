<template>
    <div id="form-helper">
        <h1> I am the form helper</h1>
        <h2>I am a title from formHelper.vue</h2>
        <p> Paragraph text from formHelper.vue</p>

        <hr>
        
        <!-- below is received from App.vue -->
        <slot name="title"></slot>
        <slot name="paragraph"></slot>
        <slot name="dynamic-title"></slot>

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

    #form-helper {
      border: 2px solid red;
      border-radius: 10px;
      padding: 30px;
      margin: 30px;
    }

    #slot-title {
        color: green;
    }

//    [slot=p-1] {
//       color: blue
//     }

   slot[name=title] {
      color: blue
    }

   p[slot=p-2] {
      color: blue
    }

</style>