<script>
import {defineComponent} from 'vue'
import {mdiAccount} from "@mdi/js";

export default defineComponent({
  name: "OldNavBar",
  data () {
    return {
      mdiAccount
    }
  }
})
</script>

<template>
  <v-app-bar
      app
      color="yellow accent-3"
  >
    <v-app-bar-nav-icon> </v-app-bar-nav-icon>
    <v-toolbar-title>Sui FAQ List</v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link :to="{name: 'login'}">
      <!--        <v-btn icon> <v-icon> mdi-account </v-icon> </v-btn>-->
      <v-btn>Login</v-btn>
    </router-link>
  </v-app-bar>
</template>

<style scoped>

</style>
