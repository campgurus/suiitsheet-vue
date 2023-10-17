<script>
import { useFAQListStore } from "../store/useFAQListStore";
import { storeToRefs } from "pinia";
export default {
  setup() {
    const store = useFAQListStore();
    // storeToRefs lets todoList keep reactivity:
    const { FAQList } = storeToRefs(store);
    const { toggleCompleted, deleteQuestion } = store;

    return { FAQList, toggleCompleted, deleteQuestion };
  },
};
</script>

<template>
  <div v-for="question in FAQList" :key="question.id">
    <span :class="{ completed: question.completed }">{{ question.question }}</span>
    <span @click.stop="toggleCompleted(question.id)">&#10004;</span>
    <span @click="deleteQuestion(question.id)">&#10060;</span>
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
