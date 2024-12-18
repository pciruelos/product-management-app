<template>
  <h1>you are in the {{ route.params?.id }}</h1>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style scoped></style>
