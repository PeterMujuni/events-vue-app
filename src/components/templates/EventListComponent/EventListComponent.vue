<template>
    <h1>Events {{ $route.query.page }}</h1>
    <div class="events" v-if="events && events?.length > 0">
        <EventCard v-for="event in events" :key="event.id" :event="event"/>
        <div class="pagination">
          <RouterLink :class="{ hide: page === 1 }" :to="{name: 'Home', query: { page: page - 1} }" rel="prev">&#60; Prev Page</RouterLink>
          <RouterLink :class="{ hide: !hasNextPage}" :to="{name: 'Home', query: { page: page + 1} }" rel="prev">Next Page &#62;</RouterLink>
        </div>
    </div>
    <div v-else>No data</div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, watchEffect } from 'vue'
import EventCard from '@organism/EventCard.vue'
import { useEventList } from '@/composables/lists/useEventList'
import { RouterLink } from 'vue-router';
import { IPageProps } from '@/interfaces/IEvent';

// STATE
const {events, totalEvents,fetchEvents} = useEventList() 

const props = defineProps<IPageProps>()
const page = computed(() => props.page)

// COMPUTED
const hasNextPage = computed(() => {
  if (!totalEvents.value) return
  const totalPage = Math.ceil(totalEvents.value / 2)
  return page.value < totalPage
})
// LIFE CYCLES
onBeforeMount(() => {
  watchEffect( async () => {
    await fetchEvents(2, page.value)
  })
})
</script>

<style scoped>
.events {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}

.hide {
  visibility: hidden;
}
</style>./composables/useEventList../../../composables/lists/useEventList