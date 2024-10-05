<template>
  <CodeHighlighter :key="updateComponent" :code="content.code" :lang="content.lang" :theme="content.theme" />
</template>

<script setup>
import CodeHighlighter from './components/CodeHighlighter.vue'
import { watch, ref } from 'vue'
const props = defineProps({
  content: { type: Object, required: true },
})

const updateComponent = ref(0);
watch(() => props.content, () => (updateComponent.value += 1), { deep: true });
</script>
