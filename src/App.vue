<script setup>
import { ref } from 'vue';
let count = ref(1);
</script>

<template>
     <h1>{{ count }}</h1>
</template>

<style scoped>
* {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: Inter, sans-serif;
}
</style>
