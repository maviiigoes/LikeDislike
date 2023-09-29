import { useState } from 'react'
import { Frases, frasesProps } from './Frase/Frases'
import { ulid } from 'ulidx'

export function Topicos() {
  const [frases, setFrases] = useState<frasesProps[]>([]);

  const autorEx = {
    nome: "maria",
    cidade: "the",
    pais: "br"
  }; 
  const exemplosDeFrases = [
    {
      id: ulid(),
      descricao: 'sorria',
      autor: autorEx,
      created_at: new Date(),
      tags: ['viva'],
      active: false,
      like: 10,
      dislike: 2
    },
    {
      id: ulid(),
      descricao: 'aprenda algo novo',
      autor: autorEx,
      created_at: new Date(),
      tags: ['educacional'],
      active: true,
      like: 5,
      dislike: 1
    }
  ];

  useState(() => {
    setFrases(exemplosDeFrases);
  });
 
  return (
    <>
      <h1>Lista de frases</h1>
      {frases.map((frase: JSX.IntrinsicAttributes & frasesProps) => (
        <Frases key={frase.id} {...frase} />
      ))}
    </>
  );
}
