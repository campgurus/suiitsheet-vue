<script>
import {defineComponent} from 'vue'
import {useAuthStore} from "@/store/useAuthStore";
import {mapActions} from "pinia";

export default defineComponent({
  name: "RegistrationForm",
  data: () => ({
    email: null,
    password: null,
    isValid: true,
    emailRules: [
      v => !!v || 'Email is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 5) || 'Password must have 5+ characters',
      v => /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character',
      v => /(?=.*\d)/.test(v) || 'Must have one number',
      v => /([!@$%])/.test(v) || 'Must have one special character [!@#$%]'
    ]
  }),
  methods: {
    ...mapActions(useAuthStore, ['signUp']),
    async submitForm () {
      await this.signUp({
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
    <v-card-title>Registration Form</v-card-title>
    <v-card-text>
      <v-form v-model="isValid">
        <v-text-field
            label="Email"
            v-model="email"
            :rules="emailRules"
            error-count="2"
            required
        ></v-text-field>
        <v-text-field
            label="Password"
            v-model="password"
            type="password"
            :rules="passwordRules"
            error-count="5"
            required
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn
          color="primary"
          :disabled="!isValid"
          @click="submitForm"
      >
        Register
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>

</style>
