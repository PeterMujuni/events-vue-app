<template>
  <div v-if="event">
    <p>{{ event.title }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { IEventProps } from '@/interfaces/IEvent';

// PROPS
defineProps<IEventProps>()

</script>

<style scoped>

</style>