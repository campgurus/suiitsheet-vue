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
      await API.delete(`/questions/${this.answer.question_id}/answers/${this.answer.id}`)
    }
  }
})
</script>

<template>
  <div class="">
    <v-card
        :text="answer.body"
        variant="tonal"
    >
      <v-btn
        @click="deleteAnswer"
      >
        Discard
      </v-btn>
    </v-card>
    <br>
  </div>
</template>

<style scoped>

</style>
