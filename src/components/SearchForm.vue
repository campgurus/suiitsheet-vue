<script>
import {defineComponent} from 'vue'
import API from "@/utils/API";

export default defineComponent({
  name: "SearchForm",
  data () {
    return {
      query: ''
    }
  },
  methods: {
    async findQuestions () {
      const results = API.get('/questions', {
        params: {
          search: this.query
        }
      })
      this.$emit('update-questions', results)
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
