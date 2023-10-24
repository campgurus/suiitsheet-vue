<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "SearchForm",
  data () {
    return {
      query: ''
    }
  },
  methods: {
    async findQuestions () {

    }
  }
})
</script>

<template>
  <div class="">
    <input
        v-model="query" type="text"
        @change="findQuestions(query)"
    />
  </div>
</template>

<style scoped>

</style>
