<script setup lang="ts">
import { computed } from 'vue';
import { Task } from '../composables/useTasks';

const props = defineProps<{ amount: Task[] }>();

const completed = computed(() => props.amount.filter(task => task.done).length);
</script>

<template>
     <div class="tasksAmount">
          <p>Tarefas ({{ completed }} / {{ amount.length }})</p>
     </div>
</template>

<style scoped>
.tasksAmount {
     display: flex;
     justify-content: center;
     align-items: center;
     width: fit-content;
     min-width: 140px;
     height: 30px;
     padding: 0 12px;
     border-radius: 20px;
     margin: 10px 0;
     border: 2px solid var(--color-bg-input);
}

p {
     font-size: clamp(12px, 2.4vw, 13px);
     white-space: nowrap;
}
</style>
