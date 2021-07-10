<template>
    <footer>
        <p> {{ copyright + " & " + title }}</p>
    </footer>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
    }
  },
  data () {
    return {
        copyright: 'Copyright 2021 Vue Ninjas'
    }
  },

  methods: { },

  computed: {}
}
</script>

<style lang="scss" scoped>

  footer {
      background: #222;
      padding: 20px;
  }

  p {
    color: lightgreen;
    text-align: center;
  }

</style>

