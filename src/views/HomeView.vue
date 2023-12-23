<template>
    <EventListComponent :page="page"/>
</template>

<script setup lang="ts">
import { IPageProps } from '@/interfaces/IEvent';
import EventListComponent from '@templates/EventListComponent/EventListComponent.vue'
defineProps<IPageProps>()
</script>

<style scoped>

</style>