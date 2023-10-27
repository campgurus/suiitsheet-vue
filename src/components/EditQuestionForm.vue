<script>
import {defineComponent} from 'vue'
import {mdiPencil} from "@mdi/js";
import API from "@/utils/API";

export default defineComponent({
  name: "EditQuestionForm",
  data: () => ({
    dialog: false,
    mdiPencil,
    formQuestion: ''
  }),
  props: {
    question: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  mounted() {
    if (this.question) {
      this.formQuestion = this.question
    }
  },
  methods: {
    async saveQuestion () {
      await API.put(`/questions/${this.question.id}`, {
        body: this.formQuestion.body
      })
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
  >
    <template v-slot:activator="{ props }">
      <v-btn
          color="primary"
          v-bind="props"
      >
        <v-icon :icon="mdiPencil" />
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Question</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col
                cols="12"
                sm="6"
                md="4"
            >
              <v-text-field
                  label="Add/Edit Question"
                  required
                  v-model="formQuestion.body"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
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
            @click="saveQuestion"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>
