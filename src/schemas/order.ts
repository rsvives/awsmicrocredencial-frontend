import { z } from "zod";

export const CreateOrderRequest = z.object({
    price: z.number().positive(),
    name: z.string().min(5).max(100).optional(),
    address: z.string().min(5).max(100),
})

export const Order = z.object({
    Id: z.string().uuid(),
    price: z.number().positive(),
    username: z.string().min(5).max(100),
    // address: z.string().min(5).max(100),
    orderStatus: z.enum(['created', 'processed'])
})

export const OrderResponse = z.object({
    message: z.string().optional(),
    order: Order

})



export type CreateOrderRequest = z.infer<typeof CreateOrderRequest>
export type OrderResponse = z.infer<typeof OrderResponse>
