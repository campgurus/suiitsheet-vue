<script>
import {defineComponent} from 'vue'
import {mdiPencil} from "@mdi/js";
import API from "@/utils/API";
import { useFAQListStore } from '../store/useFAQListStore';
import { mapActions } from "pinia";

export default defineComponent({
  name: "NewQuestionForm",
  data: () => ({
    dialog: false,
    mdiPencil,
    formQuestion: ''
  }),
  methods: {
    ...mapActions(useFAQListStore, ["getQuestions"]),
    async saveQuestion () {
      await API.post(`/questions/`, {
        question: {
          body: this.formQuestion
        }
      })
      await this.getQuestions()
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
        Add a Question
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Add a Question</span>
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
                  required
                  v-model="formQuestion"
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

