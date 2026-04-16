import { Card, CardContent } from "../ui/card"
import { Header } from "./Header"

import type { ReactNode } from "react"

export const AppLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <main className="bg-mauve-200 h-full flex flex-col flex-1 min-h-dvh">
                <Header></Header>

                <Card className=" max-w-2xl w-full mx-auto my-8 min-h-60 flex ">
                    <CardContent>
                        {children}
                    </CardContent>
                </Card>

            </main>
        </>
    )
}