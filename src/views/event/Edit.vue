<template>
    <div v-if="event">
      <h1>Edit event here</h1>
    </div>
</template>
  
<script setup lang="ts">
import { IEventProps } from '@/interfaces/IEvent';

// PROPS
defineProps<IEventProps>()

</script>

<style scoped>

</style>