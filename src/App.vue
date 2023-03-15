<script setup lang="ts">
import { ref } from 'vue'

const header = ref('Shopping List App')
const items = ref([
  { id: 1, label: "Milk" },
  { id: 2, label: "Bread" },
  { id: 3, label: "Eggs" },
  { id: 4, label: "Cheese" }
])  
</script>

<template>
  <h1>{{ header }}</h1>
  <ul>
    <li v-for="({ id, label }, index) in items" :key="id"> {{ index }} {{ label }}</li>
  </ul>
</template>