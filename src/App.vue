<script setup lang="ts">
import { ref } from 'vue'
import Drag from './components/Drag.vue';
import draggable from "vuedraggable";


const drag = ref(false);

const header = ref('Shopping List App')
const items = ref([
  { id: 1, label: "Milk" },
  { id: 2, label: "Bread" },
  { id: 3, label: "Eggs" },
  { id: 4, label: "Cheese" }
])  

</script>

<template>

  <Drag />
  <FormKit
  type="range"
  name="strength"
  id="strength"
  label="Strength"
  value="5"
  validation="min:2|max:9"
  validation-visibility="live"
  min="1"
  max="10"
  step="1"
  help="How many strength points should this character have?"
  />

  <h1>{{ header }}</h1>
  <div>
    <draggable
      v-model="items"
      @start="drag = true"
      @end="drag = false"
      item-key="id"
    >
      <template #item="{ element }">
        <div>{{ element }}</div>
      </template>
    </draggable>

  </div>
  <ul>
    <li v-for="({ id, label }, index) in items" :key="id"> {{ index }} {{ label }}</li>
  </ul>


  
</template>
