<script>
import {defineComponent} from 'vue'
import {mdiPencil} from "@mdi/js";
import API from "@/utils/API";
import { useAuthStore } from "@/store/useAuthStore";
import {mapState} from "pinia";
import TextEditor from './TextEditor.vue'

export default defineComponent({
  name: "NewAnswerForm",
  data: () => ({
    dialog: false,
    mdiPencil,
    formAnswer: '',
    content: ''
  }),
  props: {
    question: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    TextEditor
  },
  methods: {
    ...mapState(useAuthStore, ['isLoggedIn']),
    async saveAnswer () {
      console.log('logged in?', this.isLoggedIn)
      console.log('answer is: ', this.formAnswer)
      if (this.isLoggedIn) {
        await API.post(`/questions/${this.question.id}/answers`, {
          answer: {
            body: this.formAnswer,
            question_id: this.question.id
          }
        })
      } else {
        alert('you need to login to add a question')
      }
      this.dialog = false
    }
  }
})
</script>

<template>
  <v-dialog
      v-model="dialog"
      persistent
      width="1024"
      class="pb-5"
  >
    <template v-slot:activator="{ props }"
    >
      <v-btn
          v-bind="props"
      >
        Answer
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">New Answer</span>
      </v-card-title>
      <v-card-text>
        <p>{{formAnswer}}</p>
        <v-container>
          <v-row>
            <v-col
                cols="12"
                sm="6"
                md="4"
            >
                <text-editor v-model="formAnswer" />
<!--              <v-text-field-->
<!--                  required-->
<!--                  v-model="formAnswer"-->
<!--              ></v-text-field>-->
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
        >
          Close
        </v-btn>
        <v-btn
            color="blue-darken-1"
            variant="text"
            @click="saveAnswer"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>

