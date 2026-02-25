<script setup lang="ts">
import alarmSound from './assets/audio/minecraft-rare-achievements-sound-louay-bekakra-youtube_D5hbJYsF.mp3';
const alarmAudio = new Audio(alarmSound);
import { ref, computed } from 'vue';
import TasksAmount from './components/tasksAmount.vue';
import Timer from './components/timer.vue';
import TimerControls from './components/timerControls.vue';
import TaskList from './components/taskList.vue';
import AddTask from './components/addTask.vue';
import { useTasks } from './composables/useTasks';
const { tasks, addTask, getTaskById, markAsDone, removeTask } = useTasks();

let seconds = ref(0);
let minutes = ref(0);
const isRunning = ref(false);
let intervalId: ReturnType<typeof setInterval> | null = null;
let taskTitle = ref('(Selecione uma tarefa)');

const timer = computed(() => {
     return `${String(minutes.value).padStart(2, '0')}:${String(seconds.value).padStart(2, '0')}`;
});

function playAlarm() {
     alarmAudio.currentTime = 0;
     alarmAudio.play().catch(() => {
          console.warn('Usuário não interagiu ainda');
     });
}

function startTimer() {
     if (isRunning.value) return;
     if (minutes.value === 0 && seconds.value === 0) return;
     if (taskTitle.value === '(Selecione uma tarefa)' || taskTitle.value === '(Tarefa já feita)')
          return alert('Selecione uma tarefa');

     isRunning.value = true;

     intervalId = setInterval(() => {
          if (seconds.value === 0) {
               seconds.value = 59;
               minutes.value--;
          } else {
               seconds.value--;
          }

          if (minutes.value === 0 && seconds.value === 0) {
               markAsDone(taskTitle.value);
               taskTitle.value = '(Tarefa já feita)';
               playAlarm();
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
     const task = getTaskById(id);
     if (!task) return;

     if (task.done) {
          taskTitle.value = '(Tarefa já feita)';
          return;
     }

     taskTitle.value = task.title;
}
</script>

<template>
     <main>
          <h1 class="title">Pomodoro - Timer</h1>

          <div class="container">
               <section class="timer">
                    <TasksAmount :amount="tasks" />

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

                    <TaskList :tasks="tasks" @title="taskSelected" @delete="removeTask" />

                    <AddTask @add="addTask" />
               </section>
          </div>
     </main>
</template>

<style scoped>
main {
     width: min(900px, 100%);
     min-height: 550px;
     max-height: calc(100vh - 32px);
     border-radius: 12px;
     background-color: var(--color-bg-secondary);
     padding: clamp(16px, 3vw, 30px);
     display: flex;
     flex-direction: column;
}

.container {
     display: grid;
     grid-template-columns: minmax(280px, 1fr) minmax(280px, 1fr);
     gap: clamp(20px, 3vw, 36px);
     flex: 1;
     min-height: 0;
     margin-top: 12px;
}

.container .timer {
     display: flex;
     align-items: center;
     flex-direction: column;
     justify-content: flex-start;
     min-width: 0;
}

.container .tasks {
     display: flex;
     flex-direction: column;
     height: 100%;
     min-height: 0;
     min-width: 0;
}

.title {
     font-size: clamp(20px, 2.4vw, 24px);
     font-weight: 500;
}

.subTitle {
     font-size: clamp(16px, 2vw, 18px);
     font-weight: 500;
}

@media (max-width: 900px) {
     main {
          min-height: unset;
          max-height: none;
     }

     .container {
          grid-template-columns: 1fr;
          gap: 20px;
     }

     .container .tasks {
          min-height: 260px;
     }
}

@media (max-width: 560px) {
     main {
          padding: 16px;
          border-radius: 8px;
     }

     .container {
          gap: 16px;
          margin-top: 8px;
     }
}
</style>
