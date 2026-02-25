import { ref, watch } from 'vue';

export interface Task {
     id: number;
     title: string;
     done: boolean;
}

const STORAGE_KEY = 'pomodoro_tasks';

function loadTasks(): Task[] {
     const saved = localStorage.getItem(STORAGE_KEY);
     return saved ? JSON.parse(saved) : [];
}

export function useTasks() {
     const tasks = ref<Task[]>(loadTasks());

     function addTask(title: string) {
          if (!title.trim()) return;

          if (tasks.value.find(t => t.title === title)) {
               alert('Tarefa duplicada');
               return;
          }

          const newId = tasks.value.length ? Math.max(...tasks.value.map(t => t.id)) + 1 : 1;

          tasks.value.push({
               id: newId,
               title,
               done: false,
          });
     }

     function removeTask(id: number) {
          tasks.value = tasks.value.filter(t => t.id !== id);
     }

     function getTaskById(id: number) {
          return tasks.value.find(t => t.id === id);
     }

     function markAsDone(title: string) {
          const task = tasks.value.find(t => t.title === title);
          if (task) task.done = true;
     }

     watch(
          tasks,
          newTasks => {
               localStorage.setItem(STORAGE_KEY, JSON.stringify(newTasks));
          },
          { deep: true },
     );

     return {
          tasks,
          addTask,
          getTaskById,
          markAsDone,
          removeTask,
     };
}
