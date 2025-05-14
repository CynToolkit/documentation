<template>
    <div
        class="mermaid"
    >
        {{ modelValue  }}
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, useTemplateRef } from 'vue';

const { modelValue } = defineProps<{ modelValue: string }>()
</script>

<style lang="scss" scoped></style>