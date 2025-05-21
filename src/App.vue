<template>
  <div class="app">
    <h1>MFE 3</h1>
    <div class="card">
      <button class="btn btn-success" @click="increment">
        count is {{ count }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}
</script>
