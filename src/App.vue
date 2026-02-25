<script setup lang="ts">
import { ref, computed } from 'vue';
import TasksAmount from './components/tasksAmount.vue';
import Timer from './components/timer.vue';
import TimerControls from './components/timerControls.vue';
import TaskList from './components/taskList.vue';
import AddTask from './components/addTask.vue';

let seconds = ref(0);
let minutes = ref(0);
const isRunning = ref(false);
let intervalId: ReturnType<typeof setInterval> | null = null;
let taskTitle = ref('(Selecione uma tarefa)');

const timer = computed(() => {
     return `${String(minutes.value).padStart(2, '0')}:${String(seconds.value).padStart(2, '0')}`;
});

function startTimer() {
     if (isRunning.value) return;
     if (minutes.value === 0 && seconds.value === 0) return;
     if (taskTitle.value === '(Selecione uma tarefa)') return alert('Selecione uma tarefa');

     isRunning.value = true;

     intervalId = setInterval(() => {
          if (seconds.value === 0) {
               seconds.value = 59;
               minutes.value--;
          } else {
               seconds.value--;
          }

          if (minutes.value === 0 && seconds.value === 0) {
               tarefas.value.find(task => task.title === taskTitle.value).done = true;
               taskTitle.value = '(Tarefa já feita)';
               stop();
          }
     }, 1000);
}

function stop() {
     isRunning.value = false;

     if (intervalId) {
          clearInterval(intervalId);
          intervalId = null;
     }
}

function reset() {
     stop();
     minutes.value = 0;
     seconds.value = 0;
}

function increment() {
     if (isRunning.value) return;
     if (minutes.value >= 59) return;
     minutes.value++;
}

function decrement() {
     if (isRunning.value) return;
     if (minutes.value <= 0) return;
     minutes.value--;
}

function taskSelected(id: number) {
     const task = tarefas.value.find(task => task.id === id);
     if (task.done) return (taskTitle.value = '(Tarefa já feita)');
     taskTitle.value = task.title;
}

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
          done: true,
     },
     {
          id: 4,
          title: 'Estudar Svelte',
          done: false,
     },
     {
          id: 5,
          title: 'Estudar Flutter',
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

                    <Timer :time="timer" :task-title="taskTitle" />

                    <TimerControls
                         @increment="increment"
                         @decrement="decrement"
                         @play="startTimer"
                         @pause="stop"
                         @reset="reset"
                    />
               </section>

               <section class="tasks">
                    <h1 class="subTitle">Tasks List:</h1>

                    <TaskList :tasks="tarefas" @title="taskSelected" />

                    <AddTask />
               </section>
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
     margin-top: 40px;
     display: flex;
     flex-direction: column;
     height: 100%;
     min-height: 0;
}

.title {
     font-size: 24px;
     font-weight: 500;
}

.subTitle {
     font-size: 18px;
     font-weight: 500;
}
</style>
