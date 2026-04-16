import { useOrder } from "@/hooks/use-orders"

export const OrderDetailsPage = ({ orderId }: { orderId: string }) => {

    const { data: orderDetails, isLoading, error } = useOrder(orderId)

    if (isLoading) return "...loading"
    if (error) return "error"

    if (!orderDetails || orderDetails.message === "orderId missing") return "no order found"
    return (
        <>
            <h2 className="font-medium text-lg mb-3">🍕 Your ordered pizza:</h2>
            <div>
                <p><b>id:</b> {orderDetails.order.Id}</p>
                <p><b>status:</b> {orderDetails.order.orderStatus}</p>
                <p><b>price:</b> {orderDetails.order.price}</p>
                <p><b>username:</b> {orderDetails.order.username}</p>


            </div>
        </>
    )
}