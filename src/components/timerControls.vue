<script setup lang="ts">
import { Play, Pause, Save } from 'lucide-vue-next';
</script>

<template>
     <div class="timerControlsContainer">
          <button class="timerControlsButton">
               <Play color="var(--color-quaternary)" />
          </button>

          <button class="timerControlsButton">
               <Pause color="var(--color-quaternary)" />
          </button>

          <button class="timerControlsButton">
               <Save color="var(--color-quaternary)" />
          </button>

          <button class="timerControlsButton">
               <span>+ 1</span>
          </button>

          <button class="timerControlsButton">
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
