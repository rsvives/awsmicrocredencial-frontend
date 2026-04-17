import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ordersService } from "@/service/order.service";
// const MAX_POLLS = 5;
export const useOrder = (id: string) => {
    return useQuery({
        queryKey: ["orders", id],
        queryFn: () => ordersService.findOrder(id),
        refetchInterval: (query) => {
            const status = query.state.data?.order.orderStatus;
            const fetchCount = query.state.dataUpdateCount;
            // Solo hace polling si está pendiente
            console.log(`Polling for order ${id}, attempt ${fetchCount + 1}, status: ${status}`);
            if (status !== 'created') return false;
            // if (fetchCount >= MAX_POLLS) return false;
            return 1000 + fetchCount * 4000;
        },
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