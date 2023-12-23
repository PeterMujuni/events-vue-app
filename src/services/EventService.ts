import { computed } from "vue";

// EVENTS
export const getEvents = (perPage: number, page: number) => computed(() => `/events${perPage && '?_limit='+perPage}${page && '&_page='+page}`).value
export const getEvent = (id: number) => computed(() => '/events/'+id).value