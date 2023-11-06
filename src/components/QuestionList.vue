<script>
import {defineComponent} from 'vue'
import { mdiPencil, mdiDelete } from '@mdi/js';
import EditQuestionForm from "@/components/EditQuestionForm.vue";
import AnswerText from "@/components/AnswerText.vue";
import NewAnswerForm from "@/components/NewAnswerForm.vue";
import { useFAQListStore } from '../store/useFAQListStore';
import { useAuthStore } from "@/store/useAuthStore";
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
      mdiPencil,
      mdiDelete
    }
  },
  computed: {
    ...mapState(useFAQListStore, ["FAQList"]),
    ...mapState(useAuthStore, ["isAdmin", "isLoggedIn"])
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
            <v-col>
              <v-col-10 class="d-flex justify-start">
                <strong class="mr-2">Question: </strong> {{ question.body }}
                <span v-if="question.answers.length < 1" style="color: red"> (Needs Answer)</span>
              </v-col-10>
              <v-col-2>
                <edit-question-form :question="question"/>
              </v-col-2>
            </v-col>
            <v-btn
                v-if="isLoggedIn && isAdmin"
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
            <answer-text :answer="answer" />
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
