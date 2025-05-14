<template>
<pre class="diagram mermaid" ref="diagramEl">
{{ modelValue }}</pre>
</template>

<script lang="ts" setup>
import mermaid from 'mermaid'
import { onMounted, useTemplateRef } from 'vue';

mermaid.initialize({ startOnLoad: false })

const { modelValue } = defineProps<{ modelValue: string }>()

const diagramEl = useTemplateRef('diagramEl')

console.log('modelValue', modelValue)

onMounted(() => {
    mermaid.run({
        nodes: [diagramEl.value!],
    })
})
</script>

<style lang="scss" scoped>

</style>