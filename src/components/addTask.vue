<script setup lang="ts">
import { ref } from 'vue';
const emit = defineEmits(['add']);

const newTask = ref('');

function addTask() {
     if (!newTask.value.trim()) return;
     emit('add', newTask.value);
     newTask.value = '';
}
</script>

<template>
     <div class="addTask">
          <input type="text" placeholder="Add new task..." v-model="newTask" />
          <div class="actions">
               <button @click="addTask">Add</button>
          </div>
     </div>
</template>

<style scoped>
.addTask {
     width: min(100%, 280px);
     margin-top: auto;
     margin-bottom: clamp(14px, 5vh, 40px);
     margin-left: 20px;
}

input {
     width: 100%;
     padding: 10px 12px;
     border-radius: 4px;
     background-color: var(--color-bg-input);
     color: var(--color-primary);
     display: block;
     border: none;
     margin-bottom: 8px;
}

.actions {
     display: flex;
     justify-content: flex-end;
}

button {
     padding: 8px 26px;
     border-radius: 12px;
     background-color: var(--color-secondary);
     color: var(--color-bg-input);
     border: none;
     cursor: pointer;
     font-weight: 500;
}

@media (max-width: 560px) {
     .addTask {
          margin-left: 0;
          margin-bottom: 0;
     }
}
</style>
