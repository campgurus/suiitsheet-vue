<script>
import {defineComponent} from 'vue'
import QuestionForm from './EditQuestionForm.vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Question",
  props: {
    question: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: [
      QuestionForm
  ]
})
</script>

<template>
  <div class="">
    <v-expansion-panels variant="inset" class="my-4">
      <v-expansion-panel
          v-for="i in 3"
          :key="i"
          title="Item"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      ></v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<style scoped>

</style>
