<script setup>
import MermaidDiagram from './components/MermaidDiagram.vue'
import diagram from './assets/architecture/architecture.mermaid?raw'
</script>

> [!WARNING]
> Work in progress

<MermaidDiagram :model-value="diagram"></MermaidDiagram>