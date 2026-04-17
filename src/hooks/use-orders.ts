import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ordersService } from "@/service/order.service";

export const useOrder = (id: string) => {
    return useQuery({
        queryKey: ["orders", id],
        queryFn: () => ordersService.findOrder(id),
        // refetchInterval: (query) => {
        //     const status = query.state.data?.order.orderStatus;
        //     // Solo hace polling si está pendiente
        //     return status === 'created' ? 5000 : false;
        // },
        enabled: !!id
    })
}

export const useAllOrders = () => {
    return useQuery({
        queryKey: ["orders"],
        queryFn: ordersService.getAllOrders
    })
}

export const useCreateOrder = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ordersService.createOrder,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["orders"] })
        }
    })
}