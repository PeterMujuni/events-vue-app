<template>
    <div v-if="event">
      <h1>Rigister for event</h1>
      <button @click="register">Regiser Me</button>
    </div>
</template>
  
<script setup lang="ts">
import { IEventProps } from '@/interfaces/IEvent';
import { useRouter } from 'vue-router';

// PROPS
defineProps<IEventProps>()

// STATE
const router = useRouter()

// METHODS
const register = () => {
  // is register api call is success
  // push back to event details
  router.push({
    name: 'EventDetail'
  })
}
</script>

<style scoped>

</style>