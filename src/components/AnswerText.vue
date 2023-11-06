<script>
import {defineComponent} from 'vue'
import API from '@/utils/API'
import {useFAQListStore} from "@/store/useFAQListStore";
import {mapActions, mapState} from "pinia";
import {useAuthStore} from "@/store/useAuthStore";

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
    ...mapActions(useFAQListStore, ['getQuestions']),
    ...mapState(useAuthStore, ['isLoggedIn']),
    async deleteAnswer () {
      if (confirm("Do you really want to delete?")) {
        await API.delete(`/questions/${this.answer.question_id}/answers/${this.answer.id}`)
        await this.getQuestions()
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
        <div
            v-html="answer.body"
            class="text-left"
        ></div>
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
