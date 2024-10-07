import Image from "next/image"

interface DadosPoke  {
    id: string,
    nome: string,
    imagem: string
}


const CardPokedex : React.FC<DadosPoke> =  ({id, nome, imagem}) => {

    return (
        <>
            <div>
                <div>
                    <Image alt="" src={imagem}></Image>
                </div>
                <div>
                    <h1>{nome}</h1>
                </div>
            </div>        
        </>
    )
}

export default CardPokedex