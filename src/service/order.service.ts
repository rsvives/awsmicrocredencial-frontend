import type { OrderResponse } from "@/schemas/order"

const API_BASE_URL = import.meta.env.DEV
    ? '/api'                              // Vite proxy
    : import.meta.env.VITE_API_URL

export const ordersService = {
    getAllOrders: async (): Promise<OrderResponse[]> => {
        console.log("fetching orders from", API_BASE_URL)
        const response = await fetch(`${API_BASE_URL}/orders`)
        const data = await response.json()
        console.log("data", data)
        return data
    },

    createOrder: async (order: { username: string, price: number }): Promise<OrderResponse> => {
        console.log("creating order with data", order)
        const response = await fetch(`${API_BASE_URL}/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(order)
        })
        const data = await response.json()
        console.log("data", data)
        return data
    },

    findOrder: async (id: string): Promise<OrderResponse> => {
        console.log("fetching order with id", id, API_BASE_URL)
        const response = await fetch(`${API_BASE_URL}/orders/${id}`)
        console.log("response", response)
        const data = await response.json()
        console.log("data", data)
        return data
    }

}