<script>
import {defineComponent} from 'vue'
import API from "@/utils/API";

export default defineComponent({
  name: "LoginForm",
  data: () => ({
    email: null,
    password: null,
    isValid: true
  }),
  methods: {
    async submitForm () {
      await API.post('/login', {
        user: {
          email: this.email,
          password: this.password
        }
      }).then(async (response) => {
        console.log('headers returns: ', response.headers.authorization)
        // this.$router.push({ path: '/' })
      })
    }
  }
})
</script>

<template>
  <v-card class="mx-15">
    <v-card-title>Login Form</v-card-title>
    <v-card-text>
      <v-form v-model="isValid">
        <v-text-field
            label="Email"
            v-model="email"
            :rules="[v => !!v || 'Email is required']"
            error-count="2"
            required
        ></v-text-field>
        <v-text-field
            label="Password"
            v-model="password"
            type="password"
            :rules="[v => !!v || 'Password is required']"
            error-count="5"
            required
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn
          color="primary"
          :disabled="!isValid"
          @click = "submitForm"
      >
        Login
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>

</style>
