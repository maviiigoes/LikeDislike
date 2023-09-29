import { useState } from "react";
import "./style.css";

interface Autor {
  nome: string;
  cidade: string;
  pais: string;
}

export interface FrasesProps {
  id: string;
  descricao: string;
  autor: Autor;
  created_at: Date;
  tags: string[];
  active: boolean;
  like: number;
  dislike: number;
}

export function Frases({
  //id,
  descricao,
  autor,
  //created_at,
  tags,
  //active,
  like: initialLike,
  dislike: initialDislike,
}: FrasesProps) {
  const [like, setLike] = useState(initialLike);
  const [dislike, setDislike] = useState(initialDislike);

  const handleLikeClick = () => {
    setLike(like + 1);
  };

  const handleDislikeClick = () => {
    setDislike(dislike + 1);
  };

  const resultado = like - dislike;

 
  const progressoStyle = {
    width: `${like / (like + dislike) * 100}%`,
    backgroundColor: 'green', 
  };

  const likeButtonClass = resultado >= 1 ? "green-button" : "";
  const dislikeButtonClass = resultado < 0 ? "red-button" : "";

  return (
    <>
      <div className="topico">
        
            <div className="tags">
         {tags}
            </div>


          <br />
          <p className="descricao">
          {descricao}
          </p>
          <br />
          <p className="autorNome">
          {autor.nome}

          </p>
          <br />
          <p className="LikeDislike">
          Like: {like} ||  Dislike: {dislike}
          </p>
        
        <div className="container-progresso">
          <div
            className={`progresso`}
            style={progressoStyle} 
          ></div>
        </div>
        <div>
          <button onClick={handleLikeClick} className={likeButtonClass}>
            Like
          </button>
          <button onClick={handleDislikeClick} className={dislikeButtonClass}>
            Dislike
          </button>
        </div>
        <p>saldo: {resultado}</p>
      </div>
    </>
  );
}
