<script setup lang="ts">
import { Task } from '../types';

defineProps<{ tasks: Task[] }>();
</script>

<template>
     <div class="containerTaskList">
          <ol>
               <li v-for="{ title, id } in tasks" :key="id">
                    {{ title }}
                    <hr />
               </li>
          </ol>
     </div>
</template>

<style scoped>
.containerTaskList {
     margin: 20px;
     flex: 1;
     min-height: 0;
     overflow-y: auto;
}

ol {
     list-style: decimal;
     list-style-position: inside;
     padding-left: 4px;
}

li {
     margin: 20px 0;
}

li:hover hr,
li:hover {
     border-color: var(--color-secondary);
     opacity: 1;
     cursor: pointer;
}

hr {
     width: 60%;
     margin-top: 16px;
     margin-left: -20px;
     opacity: 0.4;
}
</style>
