<script setup lang="ts">
import { ref, computed } from 'vue';

defineProps<{ time: string }>();
</script>

<template>
     <div class="containerTimer">
          <h1>{{ time }}</h1>
          <p>Study Time</p>
     </div>
</template>

<style scoped>
.containerTimer {
     width: 250px;
     height: 250px;
     border-radius: 50%;
     border: 14px solid var(--color-secondary);
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     margin: 14px 0;
}

.containerTimer h1 {
     color: var(--color-primary);
     font-size: 50px;
     font-family: var(--font-secondary);
     font-weight: 800;
     margin: 0;
}

.containerTimer p {
     font-size: 18px;
     font-weight: 300;
     color: var(--color-quaternary);
     margin-top: 10px;
}
</style>
