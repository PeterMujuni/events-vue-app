import { reactive, toRefs } from "vue"
import { IEvent } from "@/interfaces/IEvent"
import { useDataFetch } from "../api/useDataFetch"
import { getEvent } from "@/services/EventService"
import { useRouter } from "vue-router"

export const useEvent = () => {
    const { get } = useDataFetch()
    const router = useRouter()

    // LOCALSTATE
    const localState = reactive({
        event: null as null | IEvent
    })

    const fetchEvent = async (id: number) => {
        const response = await get(getEvent(id));
        
        if(response.status !== 200 && response.status === 404) {
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

        localState.event = response.data
    }
    
    return {
        ...toRefs(localState),
        fetchEvent
    }
}