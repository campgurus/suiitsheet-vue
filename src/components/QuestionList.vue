<script>
import {defineComponent} from 'vue'
import API from "@/utils/API";
import { mdiPencil } from '@mdi/js';
// import { useFAQListStore } from '../store/useFAQListStore'
// const store = useFAQListStore;

export default defineComponent({
  name: "QuestionList",
  data () {
    return {
      questions: [],
      mdiPencil
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
            <v-col-10 class="d-flex justify-start">
              <strong class="mr-2">Question: </strong> {{ question.body }}
            </v-col-10>
            <v-col-2>
              <v-icon :icon="mdiPencil" />
            </v-col-2>
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
  </section>
</template>

<style scoped>

</style>
