import { OrderDetailsPage } from "./components/pages/OrderDetails/OrderDetailsPage"
import { NewOrderPage } from "./components/pages/NewOrder/NewOrderPage"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
import { useState } from "react"

function App() {

  const [orderId, setOrderId] = useState("")

  const handleNewOrder = (id: string) => {
    console.log(id)
    setOrderId(id)
  }

  return (
    <>
      <Tabs defaultValue="new_order">
        <div className="flex justify-center">
          <TabsList >
            <TabsTrigger value="new_order">New order</TabsTrigger>
            <TabsTrigger value="order_details">Order Details</TabsTrigger>
          </TabsList>

        </div>
        <TabsContent value="new_order">
          <NewOrderPage handleNewOrder={handleNewOrder} />
        </TabsContent>
        <TabsContent value="order_details">
          <OrderDetailsPage orderId={orderId} />
        </TabsContent>
      </Tabs>



    </>
  )
}

export default App
