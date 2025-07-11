<script setup>
import MermaidDiagram from './components/MermaidDiagram.vue'
import diagram from './assets/architecture/roadmap.mermaid?raw'
</script>

> [!WARNING]
> Work in progress

<MermaidDiagram :model-value="diagram"></MermaidDiagram>