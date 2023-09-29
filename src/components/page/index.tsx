import { useState } from 'react'
import {  FrasesProps } from './Frase/Frases'
import { FrasesItem } from './FrasesItem';
import { ulid } from 'ulidx'

export function Topicos() {
  const [frases, setFrases] = useState<FrasesProps[]>([]);

  const autorEx = {
    nome: "Sócrates",
    cidade: "the",
    pais: "br"
  }; 


  const autorEx1 = {
    nome: "Maria",
    cidade: "the",
    pais: "br"
  }; 

  const autorEx2 = {
    nome: "Vitória",
    cidade: "the",
    pais: "br"
  }; 


  const exemplosDeFrases = [
    {
      id: ulid(),
      descricao: 'Só sei que nada sei',
      autor: autorEx,
      created_at: new Date(),
      tags: ['filosofia'],
      active: false,
      like: 10,
      dislike: 2
    },
    {
      id: ulid(),
      descricao: 'Beba agua, coma bem e faça exercícios',
      autor: autorEx1,
      created_at: new Date(),
      tags: ['educacional'],
      active: true,
      like: 5,
      dislike: 1
    },
    {
      id: ulid(),
      descricao: 'De nada adianta ter sonhos, se você não se empenhar em correr atrás',
      autor: autorEx2,
      created_at: new Date(),
      tags: ['motivacional'],
      active: true,
      like: 5,
      dislike: 0
    }
  ];

  useState(() => {
    setFrases(exemplosDeFrases);
  });
 
  return (
    <>
      <h1>Lista de frases</h1>
      {frases.map((frase: JSX.IntrinsicAttributes & FrasesProps) => (
        <FrasesItem key={frase.id} {...frase} />
      ))}
    </>
  );
}
