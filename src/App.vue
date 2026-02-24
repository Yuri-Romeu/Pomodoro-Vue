<script setup>
import { ref } from 'vue';
let tarefas = ref([
     {
          id: 1,
          title: 'Estudar Vue',
          done: false,
     },
     {
          id: 2,
          title: 'Estudar React',
          done: true,
     },
     {
          id: 3,
          title: 'Estudar Angular',
          done: false,
     },
]);
</script>

<template>
     <main>
          <h1 class="title">Pomodoro - Timer</h1>
     </main>
</template>

<style scoped>
main {
     width: 900px;
     height: 550px;
     border-radius: 10px;
     background-color: var(--color-bg-secondary);
     padding: 30px;
}

.title {
     font-size: 24px;
     font-weight: 500;
}
</style>
