<template>
    <form @submit.prevent="addTarefa(tarefa)">
      <div class="input-group">
        <InputText type="text" v-model="tarefa.description" />
        <Calendar v-model="tarefa.date" showTime hourFormat="24"/>
        <Button label="Criar" type="submit" />
      </div>
      <DataTable :value="tarefas" tableStyle="min-width: 50rem">
        <Column field="description" sortable header="Descrição" />
        <Column field="date" sortable header="Prazo" :body="formatDate" />
      </DataTable>
    </form>
  </template>
  
  <script>
  import InputText from 'primevue/inputtext';
  import Calendar from 'primevue/calendar';
  import DataTable from 'primevue/datatable';
  import Column from 'primevue/column';
  import Button from 'primevue/button';
  
  export default {
    name: 'CriadorTarefas',
    components: {
      InputText,
      Button,
      Calendar,
      DataTable,
      Column,
    },
    data() {
      return { tarefas: [], tarefa: { description: '', date: null } };
    },
    methods: {
      addTarefa(tarefa) {
        if (!tarefa.date) {
          alert('Por favor, selecione uma data.');
          return;
        }
        const currentDate = new Date();
        const selectedDate = new Date(tarefa.date);
        if (selectedDate < currentDate) {
          alert('A data selecionada é antes de hoje!');
          return;
        }
        tarefa.id = Date.now();
        this.tarefas.push(structuredClone(tarefa));
      },
      formatDate(rowData) {
        //const date = new Date(rowData.date);
        return new Date(rowData.date).toLocaleString();
      },
    },
  };
  </script>
  