<script>
import {defineComponent} from 'vue'
import LoginForm from "@/components/LoginForm.vue";
import RegistrationForm from "@/components/RegistrationForm.vue";

export default defineComponent({
  name: "SignupSigninForm",
  data: () => ({
    tab: "login"
  }),
  components: {
    LoginForm,
    RegistrationForm
  }
})
</script>

<template>
  <v-content>
    <v-tabs v-model="tab" centered>
      <v-tab href="#login">Login</v-tab>
      <v-tab href="#registration">Registration</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item :key="1" value="login">
        <login-form></login-form>
      </v-tab-item>
      <v-tab-item :key="2" value="registration">
        <registration-form></registration-form>
      </v-tab-item>
    </v-tabs-items>
  </v-content>
</template>

<style scoped>

</style>
