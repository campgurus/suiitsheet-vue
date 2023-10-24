<script>
import {defineComponent} from 'vue'
import API from "@/utils/API";
// import { useFAQListStore } from '../store/useFAQListStore'
// const store = useFAQListStore;

export default defineComponent({
  name: "QuestionList",
  data () {
    return {
      questions: []
    }
  },
  async mounted () {
    this.getQuestions()
  },
  methods: {
    async getQuestions () {
      const results = await API.get ('/questions')
      if (results.data.length > 0 ) { //is conditional needed?
        this.questions = results.data
      }
      console.log('here are the questions: ', this.questions)
    }
  }
})
</script>

<template>
  <section>
    <v-expansion-panels>
      <v-expansion-panel
          v-for="question in questions"
          :key="question.id"
      >
        <v-expansion-panel-title>
          <v-row no-gutters>
            <v-col class="d-flex justify-start">
              <strong class="mr-2">Question: </strong> {{ question.body }}
            </v-col>
          </v-row>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-row no-gutters>
            Talking Points go here
          </v-row>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                variant="text"
                color="secondary"
            >
              Cancel
            </v-btn>
            <v-btn
                variant="text"
                color="primary"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
<!--    <b-collapse-->
<!--        v-for="question in questions" :key="question.id"-->
<!--        class="card"-->
<!--        animation="slide"-->
<!--        aria-id="contentIdForA11y3">-->
<!--      <template #trigger="props">-->
<!--        <div-->
<!--            class="card-header"-->
<!--            role="button"-->
<!--            aria-controls="contentIdForA11y3"-->
<!--            :aria-expanded="props.open">-->
<!--          <p class="card-header-title">-->
<!--            Component-->
<!--          </p>-->
<!--          <a class="card-header-icon">-->
<!--            <b-icon-->
<!--                :icon="props.open ? 'menu-down' : 'menu-up'">-->
<!--            </b-icon>-->
<!--          </a>-->
<!--        </div>-->
<!--      </template>-->

<!--      <div class="card-content">-->
<!--        <div class="content">-->
<!--          {{ question.body }}-->
<!--        </div>-->
<!--      </div>-->
<!--      <footer class="card-footer">-->
<!--        <a class="card-footer-item">Answer</a>-->
<!--        <a class="card-footer-item">Edit</a>-->
<!--        <a class="card-footer-item">Delete</a>-->
<!--      </footer>-->
<!--    </b-collapse>-->
  </section>
</template>

<style scoped>

</style>
