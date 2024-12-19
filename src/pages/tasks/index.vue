<template>
  <div>
    <h1>tasks</h1>
    <RouterLink to="/">Back Home</RouterLink>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.description }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'
import type { Tables } from '../../../database/types'

const tasks = ref<Tables<'tasks'>[] | null>()

;(async () => {
  const { data, error } = await supabase.from('tasks').select()

  if (error) console.log(error)

  tasks.value = data

  console.log(tasks)
})()
</script>

<style scoped></style>
