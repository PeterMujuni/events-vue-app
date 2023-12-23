import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export const useDataFetch = () => {
    
    const get = async (endpoint: string) => {
        try {
            const response = await apiClient.get(endpoint)
            console.log("response: ", response);
            return response
            
        } catch (error: any) {
            console.log("error: ", error);
            if(error.code === "ERR_NETWORK") {
                return error.message
            } else {
                return error.response.status
            }
        }
    }

    return {
        get,
    }
}