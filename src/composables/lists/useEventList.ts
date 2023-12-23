import { reactive, toRefs } from "vue"
import { IEvent, IEventRaw } from "@interfaces/IEvent"
import { useDataFetch } from "@/composables/api/useDataFetch"
import { getEvents } from "@services/EventService"
import { useRouter } from "vue-router"

export const useEventList = () => {
    const { get } = useDataFetch()
    const router = useRouter()
    
    // LOCAL STATE
    const localState = reactive({
        events: null as null | IEvent[],
        rowData: null as null | IEventRaw,
        totalEvents: null as null | number,
    })

    const fetchEvents = async (perPage: number, page: number) => {
        localState.events = null
        const response = await get(getEvents(perPage, page))
        if(response.status !== 200 && response.status === 404){
            router.push({
                name: '404Resource',
                params: {resource: 'event'}
            })
            return null
        } else if(response === 'Network Error') {
            router.push({
                name: 'NetworkError'
            })
        }
        localState.rowData = response
        localState.events = response.data
        localState.totalEvents = response.headers['x-total-count']
    }

    return {
        ...toRefs(localState),
        fetchEvents
    }
}