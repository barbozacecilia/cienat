import axios from "axios"

export const api = axios.create({
    baseURL: "http://localhost:3001"
})


export const search = async (url, setData) => {
    const response = await api.get(url)
    setData(response.data)
} 