<template>
  <div>
    <h1>Welcome Pablo, you are doing great!</h1>
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }">Go to Project 1</RouterLink>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
