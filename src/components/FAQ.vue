<template>
  <div class="faq-app">
    <h1>Sui FAQ List</h1>

    <div class="section">
      <div class="container">
        <new-question-form />
        <question-list />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import QuestionForm from "./EditQuestionForm.vue";
import QuestionList from "./QuestionList.vue";
import NewQuestionForm from "@/components/NewQuestionForm.vue";
export default defineComponent({
  components: {NewQuestionForm, QuestionForm, QuestionList },
  setup() {
    return {};
  },
});
</script>
<style scoped>
.faq-app {
  padding: 5vh;
  min-height: 100vh;
  width: 100vw;
  background-color: #f7f9fc;
}
</style>
