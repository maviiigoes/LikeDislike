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

