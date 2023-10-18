<script>
import {defineComponent} from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Question"
})
</script>

<template>
  <section>
    <b-collapse
        v-for="question in FAQList" :key="question.id"
        class="card"
        animation="slide"
        aria-id="contentIdForA11y3">
      <template #trigger="props">
        <div
            class="card-header"
            role="button"
            aria-controls="contentIdForA11y3"
            :aria-expanded="props.open">
          <p class="card-header-title">
            Component
          </p>
          <a class="card-header-icon">
            <b-icon
                :icon="props.open ? 'menu-down' : 'menu-up'">
            </b-icon>
          </a>
        </div>
      </template>

      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
          <a>#buefy</a>.
        </div>
      </div>
      <footer class="card-footer">
        <a class="card-footer-item">Answer</a>
        <a class="card-footer-item">Edit</a>
        <a class="card-footer-item">Delete</a>
      </footer>
    </b-collapse>
  </section>
</template>

<style scoped>

</style>
