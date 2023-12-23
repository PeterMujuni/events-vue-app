<template>
    <div v-if="event">
        <h1>{{ event.title }}</h1>
        <div id="nav">
            <RouterLink :to="{ name: 'EventDetail' }">Details</RouterLink>
            |
            <RouterLink :to="{ name: 'EventRegister' }">Register</RouterLink>
            |
            <RouterLink :to="{ name: 'EventEdit' }">Edit</RouterLink>
        </div>
        <RouterView :event="event"/>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useEvent } from '@/composables/details/useEvent';
import { RouterView } from 'vue-router';

interface IProps {
    id: number;
}

const props = defineProps<IProps>()

// STATE
const {event, fetchEvent} = useEvent()

// CIRCLES
onBeforeMount(async () => {
    await fetchEvent(props.id)
})
</script>

<style scoped>

</style>