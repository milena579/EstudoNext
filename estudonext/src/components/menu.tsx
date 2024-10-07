import Link from "next/link";
import {ROUTES} from "@/constants/routes"

interface IMenu {
    op1: string;
}

export const Menu: React.FC<IMenu>= ({op1}) => {
    return(
        <>
            <nav className="text-pink-500 font-roboto flex flex-row justify-center align-center gap-5 text-large bg-indigo-900">
                <Link href={ROUTES.pokedex}>{op1}</Link>
            </nav>
        </>
    )
}
