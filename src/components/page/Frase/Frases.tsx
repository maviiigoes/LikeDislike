import { useState } from "react"
import "./style.css"


interface Autor{
    nome: string
    cidade: string
    pais: string

}


export interface frasesProps{
     id: string
     descricao: string
     autor:Autor,
    created_at: Date
    tags: string[]
    active: boolean 
    like: number
    dislike: number
}

export function Frases({id ,descricao ,autor, created_at,tags,active , like:initialLike,dislike:initialDislike,}: frasesProps){

    const [like, setLike] = useState(initialLike);
    const [dislike, setDislike] = useState(initialDislike);

    const handleLikeClick = () => {
        setLike(like + 1);
      };
    
      const handleDislikeClick = () => {
        setDislike(dislike + 1);
      };

      const resultado = like - dislike

      const likeButtonClass = resultado >= 1 ? 'green-button' : '';
      const dislikeButtonClass = resultado < 0 ? 'red-button' : '';
      

    return(
        <>
            <div className="topico">
                <p> 
                    
                    {/* {id} */}
                    <br />
                    Tags: {tags}
                    <br />
                    {descricao}
                    <br /> 
                    Autor:  {autor.nome}
                    <br />
                    Like: {like}
                    <br />
                    Dislike:  {dislike}
                </p>
                <button onClick={handleLikeClick} className={likeButtonClass}>Like</button>
                <button onClick={handleDislikeClick} className={dislikeButtonClass}>Dislike</button>
                <p> saldo: {resultado}</p>

                
            </div>
        </>
    )
}