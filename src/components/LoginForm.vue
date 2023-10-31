<script>
import {defineComponent} from 'vue'
import {useAuthStore} from "@/store/useAuthStore";
import {mapActions} from "pinia";

export default defineComponent({
  name: "LoginForm",
  data: () => ({
    email: null,
    password: null,
    isValid: true
  }),
  methods: {
    ...mapActions(useAuthStore, ['signIn']),
    async submitForm () {
      await this.signIn({
        user: {
          email: this.email,
          password: this.password
        }
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
