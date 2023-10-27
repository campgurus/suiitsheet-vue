<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AnswerText",
  props: {
    answer: {
      type: Object,
      default() {
        return {}
      }
    }
  }
})
</script>

<template>
  <v-card
      :text="answer.body"
      variant="tonal"
  ></v-card>
</template>

<style scoped>

</style>
