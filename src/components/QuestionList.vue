<script>
import {defineComponent} from 'vue'
import { mdiPencil } from '@mdi/js';
import EditQuestionForm from "@/components/EditQuestionForm.vue";
import AnswerText from "@/components/AnswerText.vue";
import NewAnswerForm from "@/components/NewAnswerForm.vue";
import { useFAQListStore } from '../store/useFAQListStore';
import { mapState, mapActions } from "pinia";
import API from "@/utils/API";

export default defineComponent({
  name: "QuestionList",
  components: {
    EditQuestionForm,
    AnswerText,
    NewAnswerForm
  },
  data () {
    return {
      mdiPencil
    }
  },
  computed: {
    ...mapState(useFAQListStore, ["FAQList"])
  },
  async mounted () {
    await this.getQuestions()
  },
  methods: {
    ...mapActions(useFAQListStore, ["getQuestions"]),
    async deleteQuestion (question) {
      if (confirm("Do you really want to delete this question?")) {
        await API.delete(`/questions/${question.id}`)
        await this.getQuestions()
      }
    }
  }
})
</script>

<template>
  <section>
    <v-expansion-panels>
      <v-expansion-panel
          v-for="question in FAQList"
          :key="question.id"
      >
        <v-expansion-panel-title>
          <v-row no-gutters>
            <v-col-10 class="d-flex justify-start">
              <strong class="mr-2">Question: </strong> {{ question.body }}
            </v-col-10>
            <v-col-2>
              <edit-question-form :question="question"/>
            </v-col-2>
            <v-btn
                @click="deleteQuestion(question)"
            >DELETE</v-btn>
          </v-row>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-row
              v-for="answer in question.answers"
              :key="answer.id"
              no-gutters
          >
            <answer-text
              :answer="answer"
            >

            </answer-text>
          </v-row>

          <v-card-actions>
            <v-spacer></v-spacer>
            <new-answer-form
                :question="question"
            />
          </v-card-actions>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </section>
</template>

<style scoped>

</style>
