<script>
import {defineComponent} from 'vue'
import API from "@/utils/API";
import { useFAQListStore } from '../store/useFAQListStore';
import { useAuthStore} from "@/store/useAuthStore";
import { mapActions, mapState } from "pinia";

export default defineComponent({
  name: "NewQuestionForm",
  data: () => ({
    dialog: false,
    formQuestion: ''
  }),
  methods: {
    ...mapActions(useFAQListStore, ["getQuestions"]),
    ...mapActions(useAuthStore, ["logout"]),
    ...mapState(useAuthStore, ['isLoggedIn']),
    async saveQuestion () {
      if (this.isLoggedIn) {
        await API.post(`/questions/`, {
          question: {
            body: this.formQuestion
          }
        })
        .catch((error) => {
          if (error.response.status === 401) {
            // Handle the unauthorized error (e.g., show an error message)
            console.log('Unauthorized. Please log in.');
            alert('Your login has expired. You need to login again.')
            this.logout()
            this.$router.push('/login-signup')
          } else {
            // Handle other errors here
            console.error('Some kind of error occurred:', error.response.status);
          }
        });
      } else {
        alert('you need to login to add a question')
      }
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
          variant="flat"
          color="primary-blue"
      >
        Add a Question
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="my-5">
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

