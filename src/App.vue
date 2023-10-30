<template>
  <v-app>
    <nav-bar />
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar
  },
});
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  background-color: #597d9a;
  display: flex;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
