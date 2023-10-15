<script>

import { ref, defineComponent } from "vue";
import { useFAQListStore } from '../store/useFAQListStore.js'
export default defineComponent({
  setup() {
    const question = ref("");
    const store = useFAQListStore();

    function addItemAndClear(item) {
      if (item.length === 0) {
        // store.inputAlert();
        return;
      }
      store.addQuestion(item);
      question.value = "";
    }

    return { question, addItemAndClear, store };
  },
});
</script>

<template>
  <form @submit.prevent="addItemAndClear(question)">
    <input v-model="question" type="text" /><button>Add</button>
  </form>
</template>

<style scoped>

</style>
