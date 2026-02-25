<script setup lang="ts">
const props = defineProps<{ time: string; taskTitle: string }>();
</script>

<template>
     <div class="containerTimer">
          <h1>{{ time }}</h1>
          <p>{{ taskTitle }}</p>
     </div>
</template>

<style scoped>
.containerTimer {
     width: clamp(210px, 32vw, 250px);
     aspect-ratio: 1 / 1;
     border-radius: 50%;
     border: clamp(10px, 1.5vw, 14px) solid var(--color-secondary);
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     margin: 14px 0;
     padding: 10px;
     text-align: center;
}

.containerTimer h1 {
     color: var(--color-primary);
     font-size: clamp(40px, 6vw, 50px);
     font-family: var(--font-secondary);
     font-weight: 800;
     margin: 0;
}

.containerTimer p {
     font-size: clamp(14px, 2.2vw, 18px);
     font-weight: 300;
     color: var(--color-quaternary);
     margin-top: 8px;
     max-width: 100%;
}
</style>
