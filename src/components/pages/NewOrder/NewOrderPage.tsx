import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCreateOrder } from "@/hooks/use-orders";
import { useState, type SubmitEvent } from "react";

export const NewOrderPage = ({ handleNewOrder }: { handleNewOrder: (id: string) => void }) => {

    const [formData, setFormData] = useState({ price: 0, username: '' })
    const { mutateAsync, isPending, } = useCreateOrder();

    const pizzas = {
        margherita: {
            displayName: "Margherita",
            price: 9.90
        },
        diavola: {
            displayName: "Diavola",
            price: 12.60
        },
        formaggi: {
            displayName: "4 Formaggi",
            price: 11.80
        },
    }

    const handleSubmit = async (e: SubmitEvent) => {
        e.preventDefault()
        console.log(formData)
        const createdOrder = await mutateAsync(formData);

        console.log(createdOrder)
        handleNewOrder(createdOrder.order.Id)

    };


    return (
        <div className="flex flex-col gap-2">

            <form onSubmit={handleSubmit} className="flex flex-col flex-1 gap-4">

                <Field>
                    <FieldLabel>Pizza:</FieldLabel>
                    <div className="flex gap-4 items-baseline">
                        <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, price: parseFloat(value) }))}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a pizza" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {Object.values(pizzas).map(p => <SelectItem key={p.displayName} value={String(p.price)}>{p.displayName}</SelectItem>)}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <span className="w-full max-w-20 font-medium text-lg">{formData.price === 0 ? '- ' : formData.price}€</span>
                    </div>
                </Field>
                <Field>
                    <FieldLabel>Name:</FieldLabel>
                    <Input placeholder="your username" type="text" name="username" onChange={(e) => setFormData((prev) => ({ ...prev, username: e.target.value }))} />

                </Field>
                <Button className="mt-auto" size='lg' type="submit" disabled={isPending}>
                    {isPending ? 'Loading...' : 'Order Now! 🍕'}
                </Button>
            </form>
        </div>
    )
}