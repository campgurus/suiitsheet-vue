<script>
import {defineComponent} from 'vue'
import API from "@/utils/API";
import { useFAQListStore } from '../store/useFAQListStore';
import { mapActions } from "pinia";

export default defineComponent({
  name: "SearchForm",
  data () {
    return {
      query: ''
    }
  },
  methods: {
    ...mapActions(useFAQListStore, ["setQuestions"]),
    async findQuestions () {
      const results = await API.get('/questions', {
        params: {
          search: this.query
        }
      })
      console.log('search results are: ', results.data)
      this.setQuestions(results.data)
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
