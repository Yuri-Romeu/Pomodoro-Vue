<script setup lang="ts">
import { Task } from '../composables/useTasks';
import { CircleCheck, Trash } from 'lucide-vue-next';

defineProps<{ tasks: Task[] }>();

const emit = defineEmits<{
     (e: 'title', id: number): void;
     (e: 'delete', id: number): void;
}>();
</script>

<template>
     <div class="containerTaskList">
          <ol>
               <li v-for="{ title, id, done } in tasks" :key="id" @click="emit('title', id)">
                    {{ title }}
                    <CircleCheck
                         :size="20"
                         class="checkIcon"
                         color="var(--color-secondary)"
                         v-if="done === true"
                    />
                    <Trash
                         :size="20"
                         class="closeIcon"
                         color="red"
                         @click.stop="emit('delete', id)"
                    />
                    <hr />
               </li>
          </ol>
     </div>
</template>

<style scoped>
.containerTaskList {
     margin: 16px 20px 0;
     flex: 1;
     min-height: 0;
     overflow-y: auto;
}

ol {
     list-style: decimal;
     list-style-position: inside;
     padding-left: 2px;
}

li {
     margin: 14px 0;
     line-height: 1.35;
     word-break: break-word;
}

.checkIcon {
     vertical-align: middle;
     margin-left: 8px;
}

.closeIcon {
     vertical-align: middle;
     margin-left: 8px;
     opacity: 0;
}

li:hover hr,
li:hover .closeIcon,
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

@media (max-width: 560px) {
     .containerTaskList {
          margin: 12px 0 0;
     }

     hr {
          width: 78%;
          margin-left: -12px;
     }
}
</style>
