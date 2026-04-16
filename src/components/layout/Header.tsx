import { Pizza } from "lucide-react"

export const Header = () => {
    return (
        <header className="bg-background p-4 shadow flex items-center justify-center">
            <div className="bg-mauve-700 p-4 flex items-center justify-center rounded-2xl">
                <Pizza className="text-white"></Pizza>
            </div>
        </header>
    )
}