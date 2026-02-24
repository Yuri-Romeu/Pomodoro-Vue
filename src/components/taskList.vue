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
}

li {
     margin: 20px 0;
}

hr {
     width: 60%;
     margin-top: 16px;
     margin-left: -20px;
     opacity: 0.4;
}
</style>
