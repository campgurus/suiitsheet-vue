<script>
import {defineComponent} from 'vue'
import {mdiAccount, mdiHome} from "@mdi/js";
import {useAuthStore} from "@/store/useAuthStore";
import { mapState, mapActions } from 'pinia'

export default defineComponent({
  name: "NavBar",
  data () {
    return {
      mdiAccount,
      mdiHome
    }
  },
  computed: {
    ...mapState(useAuthStore, ["isLoggedIn"])
  },
  methods: {
    ...mapActions(useAuthStore, ['logout']),
    async signOut () {
      this.logout()
    }
  }
})
</script>

<template>
  <v-app-bar
      image="https://assets-global.website-files.com/6425f546844727ce5fb9e5ab/64377ee0d96a223b1d5c6700_01_Homepage_Hero-poster-00001.jpg"
  >
    <template v-slot:image>
      <v-img
          gradient="to top right, rgba(76,162,255,.8), rgba(192,230,255,.8)"
      ></v-img>
    </template>

    <template v-slot:prepend>
      <v-app-bar-nav-icon>
        <router-link :to="{name: 'FAQ'}">
          <!--        <v-btn icon> <v-icon> mdi-home </v-icon> </v-btn>-->
          <v-btn>Home</v-btn>
        </router-link>
      </v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Sui FAQ List</v-app-bar-title>

    <v-spacer></v-spacer>


    <router-link
        v-if="!isLoggedIn"
        :to="{name: 'login-signup'}"
        v-show="!user"
    >
      <!--        <v-btn icon> <v-icon> mdi-account </v-icon> </v-btn>-->
      <v-btn
      >
        Login
      </v-btn>
    </router-link>

    <v-btn
        v-show="isLoggedIn"
        @click="signOut"
    >
      Logout
    </v-btn>
  </v-app-bar>
</template>

<style scoped>

</style>
