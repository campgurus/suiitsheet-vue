<script>
import {defineComponent} from 'vue'
import API from "@/utils/API";
import { useFAQListStore } from '../store/useFAQListStore';
import { mapActions } from "pinia";
import _ from "lodash";

export default defineComponent({
  name: "SearchForm",
  data () {
    return {
      query: ''
    }
  },
  methods: {
    ...mapActions(useFAQListStore, ["setQuestions"]),
    findQuestions: _.debounce(async function () {
      const results = await API.get('/questions', {
        params: {
          search: this.query
        }
      })
        console.log('search results are: ', results.data)
        await this.setQuestions(results.data)
    }, 400),
  },
  watch: {
    'query' () {
      this.findQuestions()
    }
  }
})
</script>

<template>
  <v-card
      class="mx-auto my-5"
      color="grey-lighten-3"
      max-width="400"
  >
    <v-card-text>
      <v-text-field
          :loading="loading"
          density="compact"
          variant="solo"
          label="Search for questions"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
          v-model="query" type="text"
          @change="findQuestions(query)"
      ></v-text-field>
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>
