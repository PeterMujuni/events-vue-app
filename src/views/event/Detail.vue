<template>
    <div>
        <EventComponent :event="event"/>
    </div>
</template>

<script setup lang="ts">
import { IEventProps } from '@/interfaces/IEvent';
import EventComponent from '@templates/EventComponent/EventComponent.vue';

// PROPS
defineProps<IEventProps>()
</script>

<style scoped>

</style>