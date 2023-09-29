import { useState } from "react";
import { FrasesProps } from "../Frase/Frases";
import { TagList } from "../TagsList";
import { ProgressBar } from "../ProgressBar";
import { LikeDislikeStats } from "../LikeDislikeStatus";
import "./style.css";

export function FrasesItem({
  descricao,
  autor,
  like: initialLike,
  dislike: initialDislike,
  tags,
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

  const likeButtonClass = resultado >= 1 ? "green-button" : "";
  const dislikeButtonClass = resultado < 0 ? "red-button" : "";

  return (
    <div className="topico">
      <TagList tags={tags} />
      <br />
      <p className="descricao">{descricao}</p>
      <br />
      <p className="autorNome">{autor.nome}</p>
      <br />
      <LikeDislikeStats like={like} dislike={dislike} />
      <ProgressBar like={like} dislike={dislike} />
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
  );
}
