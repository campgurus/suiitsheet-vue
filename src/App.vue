<template>
  <f-a-q-app />
</template>

<script>
import { defineComponent } from "vue";
import FAQApp from "./components/FAQ.vue";

export default defineComponent({
  name: "App",
  components: {
    FAQApp,
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
