<template>
  <div class="">
    <new-question-form/>
    <search-form />
    <question-list />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import QuestionList from "./QuestionList.vue";
import NewQuestionForm from "@/components/NewQuestionForm.vue";
import SearchForm from "@/components/SearchForm.vue";
export default defineComponent({
  components: { SearchForm, NewQuestionForm, QuestionList },
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
