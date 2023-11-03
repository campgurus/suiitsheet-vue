<script>
import {defineComponent} from 'vue'
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'
import Underline from '@tiptap/extension-underline'
import {
  mdiAlignHorizontalLeft, mdiArrowULeftTop, mdiArrowURightTop, mdiCodeTags,
  mdiFormatBold,
  mdiFormatHeader1, mdiFormatHeader2, mdiFormatHeader3,
  mdiFormatItalic, mdiFormatListBulleted, mdiFormatListNumbered, mdiFormatQuoteOpen,
  mdiFormatStrikethroughVariant,
  mdiFormatUnderline
} from "@mdi/js";

export default defineComponent({
  name: "TextEditor",
  methods: {
    mdiCodeTags() {
      return mdiCodeTags
    },
    mdiArrowURightTop() {
      return mdiArrowURightTop
    },
    mdiArrowULeftTop() {
      return mdiArrowULeftTop
    },
    mdiAlignHorizontalLeft() {
      return mdiAlignHorizontalLeft
    },
    mdiFormatQuoteOpen() {
      return mdiFormatQuoteOpen
    },
    mdiFormatListNumbered() {
      return mdiFormatListNumbered
    },
    mdiFormatListBulleted() {
      return mdiFormatListBulleted
    },
    mdiFormatHeader3() {
      return mdiFormatHeader3
    },
    mdiFormatHeader2() {
      return mdiFormatHeader2
    },
    mdiFormatHeader1() {
      return mdiFormatHeader1
    },
    mdiFormatStrikethroughVariant() {
      return mdiFormatStrikethroughVariant
    },
    mdiFormatUnderline() {
      return mdiFormatUnderline
    },
    mdiFormatItalic() {
      return mdiFormatItalic
    },
    mdiFormatBold() {
      return mdiFormatBold
    }
  },
  components: {
    EditorContent
  },

  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },

  emits: ['update:modelValue'],

  data() {
    return {
      editor: null,
    }
  },

  watch: {
    modelValue(value) {
      // HTML
      const isSame = this.editor.getHTML() === value

      // JSON
      // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

      if (isSame) {
        return
      }

      this.editor.commands.setContent(value, false)
    },
  },

  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
        Underline
      ],
        editorProps: {
          attributes: {
            class: 'border',
            style: "padding: 25px;"
          },
        },
      content: this.modelValue,
      onUpdate: () => {
        // HTML
        this.$emit('update:modelValue', this.editor.getHTML())

        // JSON
        // this.$emit('update:modelValue', this.editor.getJSON())
      },
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
})
</script>

<template>
  <section
      v-if="editor"
      class="border">
    <button
        @click="editor.chain().focus().toggleBold().run()"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
        class="p-1"
    >
      <v-icon :icon="mdiFormatBold()" />
    </button>
    <button
        @click="editor.chain().focus().toggleItalic().run()"
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
        class="p-1"
    >

      <v-icon :icon="mdiFormatItalic()" />
    </button>
    <button
        @click="editor.chain().focus().toggleUnderline().run()"
        :disabled="!editor.can().chain().focus().toggleUnderline().run()"
        :class="{ 'is-active': editor.isActive('underline') }"
        class="p-1"
    >
      <v-icon :icon="mdiFormatUnderline()" />
    </button>
    <button
        @click="editor.chain().focus().toggleStrike().run()"
        :disabled="!editor.can().chain().focus().toggleStrike().run()"
        :class="{ 'is-active': editor.isActive('strike') }"
        class="p-1"
    >
      <v-icon :icon="mdiFormatStrikethroughVariant()" />
    </button>
    <button
        @click="editor.chain().focus().toggleCode().run()"
        :disabled="!editor.can().chain().focus().toggleCode().run()"
        :class="{ 'is-active': editor.isActive('code') }"
        class="p-1"
    >
      <v-icon :icon="mdiCodeTags()" />
    </button>
    <button
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
        class="p-1"
    >
      <v-icon :icon="mdiFormatHeader1()" />
    </button>
    <button
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
        class="p-1"
    >
      <v-icon :icon="mdiFormatHeader2()" />
    </button>
    <button
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
        class="p-1"
    >
      <v-icon :icon="mdiFormatHeader3()" />
    </button>
    <button
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="{ 'is-active': editor.isActive('bulletList') }"
        class="p-1"
    >
      <v-icon :icon="mdiFormatListBulleted()" />
    </button>
    <button
        @click="editor.chain().focus().toggleOrderedList().run()"
        :class="{ 'is-active': editor.isActive('orderedList') }"
        class="p-1"
    >
      <v-icon :icon="mdiFormatListNumbered()" />
    </button>
    <button
        @click="editor.chain().focus().undo().run()"
        :disabled="!editor.can().chain().focus().undo().run()"
        class="p-1"
    >
      <v-icon :icon="mdiArrowULeftTop()" />
    </button>
    <button
        @click="editor.chain().focus().redo().run()"
        :disabled="!editor.can().chain().focus().redo().run()"
        class="p-1"
    >
      <v-icon :icon="mdiArrowURightTop()" />
    </button>
  </section>
  <editor-content
      :editor="editor"
  />
</template>

<style scoped>
.tiptap p {
  margin: 1em 0;
  text-color: blue;
}
.is-active {
  background-color: #ccc;
  border-radius: 2px;
}
</style>
