<template>
  <RouterLink class="event-link" :to="{name: 'EventDetail', params: {id: event.id}}">
    <div v-if="event" class="event-card">
        <h1>{{ event.title }}</h1>
        <span>@{{ event.time }} on {{ event.date }}</span>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { IEventProps } from '@interfaces/IEvent'
import { RouterLink } from 'vue-router';

defineProps<IEventProps>()
</script>

<style scoped>
 .event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>