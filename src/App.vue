<template>
  <h1>Tarefas:</h1>
  <CriadorTarefas></CriadorTarefas>
</template>

<script>
  import CriadorTarefas from './components/CriadorTarefas.vue';

  export default {
    name: "App",
    components: {
      CriadorTarefas
    }
  }
</script>

<style>
  
  
  
  body {
    font-family: var(--font-family);
} 
</style>