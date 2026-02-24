<script setup lang="ts">
import { ref } from 'vue';
import TasksAmount from './components/tasksAmount.vue';
import Timer from './components/timer.vue';
import TimerControls from './components/timerControls.vue';

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

          <div class="container">
               <section class="timer">
                    <TasksAmount :amount="tarefas" />

                    <Timer />

                    <TimerControls />
               </section>
               <section class="tasks"></section>
          </div>
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

.container {
     display: grid;
     grid-template-columns: 1fr 1fr;
     height: 90%;
     margin: 10px 0;
}

.container .timer {
     display: flex;
     align-items: center;
     flex-direction: column;
     margin-top: 20px;
}

.container .tasks {
     background-color: green;
}

.title {
     font-size: 24px;
     font-weight: 500;
}
</style>
