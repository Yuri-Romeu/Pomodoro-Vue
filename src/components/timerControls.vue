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
     gap: 20px;
     margin-top: 26px;
}

.timerControlsButton {
     width: 50px;
     height: 50px;
     background-color: transparent;
     border-radius: 50%;
     border: 2px solid var(--color-secondary);
     display: flex;
     justify-content: center;
     align-items: center;
     cursor: pointer;
}

.timerControlsButton span {
     font-size: 18px;
     color: var(--color-quaternary);
     font-weight: 700;
}
</style>
