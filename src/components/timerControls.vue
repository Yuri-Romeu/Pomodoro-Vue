<script setup lang="ts">
import { Play, Pause, RotateCcw } from 'lucide-vue-next';

const emit = defineEmits(['increment', 'decrement', 'play', 'pause', 'reset']);
</script>

<template>
     <div class="timerControlsContainer">
          <button class="timerControlsButton" @click="emit('play')">
               <Play color="var(--color-quaternary)" />
          </button>

          <button class="timerControlsButton" @click="emit('pause')">
               <Pause color="var(--color-quaternary)" />
          </button>

          <button class="timerControlsButton" @click="emit('reset')">
               <RotateCcw color="var(--color-quaternary)" />
          </button>

          <button class="timerControlsButton" @click="emit('increment')">
               <span>+ 1</span>
          </button>

          <button class="timerControlsButton" @click="emit('decrement')">
               <span>- 1</span>
          </button>
     </div>
</template>

<style scoped>
.timerControlsContainer {
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
     gap: clamp(10px, 2vw, 20px);
     margin-top: 22px;
     width: 100%;
     max-width: 360px;
}

.timerControlsButton {
     width: clamp(44px, 9vw, 50px);
     height: clamp(44px, 9vw, 50px);
     background-color: transparent;
     border-radius: 50%;
     border: 2px solid var(--color-secondary);
     display: flex;
     justify-content: center;
     align-items: center;
     cursor: pointer;
}

.timerControlsButton span {
     font-size: clamp(14px, 2.8vw, 18px);
     color: var(--color-quaternary);
     font-weight: 700;
}

@media (max-width: 560px) {
     .timerControlsContainer {
          max-width: 280px;
          margin-top: 18px;
     }
}
</style>
