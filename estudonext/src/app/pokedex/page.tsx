import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "PokeAPI",
    description: "Generated by create next app",
};

type IData =  {
    results : {
        id:string;
        name: string;
        front_default: string;
    }
}

const PokeAPI =  async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    const data:  IData = await res.json()
    console.log(data)

    return(
        <>
            <h1>Teste</h1>
        </>
    )
}

export default PokeAPI;