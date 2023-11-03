<script>
import {defineComponent} from 'vue'
import API from '@/utils/API'

export default defineComponent({
  name: "AnswerText",
  props: {
    answer: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    async deleteAnswer () {
      if (confirm("Do you really want to delete?")) {
        await API.delete(`/questions/${this.answer.question_id}/answers/${this.answer.id}`)
      }
    }
  }
})
</script>

<template>
  <div class="">
    <v-card
        class="px-0"
        variant="outlined"
        width="100%"
        fluid
    >
      <v-card-text>
        <div v-html="answer.body"></div>
      </v-card-text>
      <v-card-actions>
        <v-btn
            color="red-lighten-2"
            variant="text"
            @click="deleteAnswer"
        >
          Discard
        </v-btn>
      </v-card-actions>
    </v-card>
    <br>
  </div>
</template>

<style scoped>

</style>
