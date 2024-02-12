import React from "react";
import { FaMapMarkerAlt, FaPhone, FaCity, FaClock } from 'react-icons/fa';
import Image from 'next/image';

// Exemplo de dados das lojas
const lojas = [
  {
    nome: "King Coffee - Brasília-DF",
    endereco: "Rua 0, Quadra 00, Número 123",
    cidade: "Brasília-DF",
    telefone: "(61) 9999-9999",
    horario: "Segunda a Sexta, das 9h às 18h",
    imagem: "/homemcafe.jpg", // Substitua pelo caminho real da imagem
  },
  {
    nome: "King Coffee - São Paulo",
    endereco: "Avenida King Coffee, 456",
    cidade: "São Paulo",
    telefone: "(11) 9999-9999",
    horario: "Segunda a Sexta, das 10h às 19h",
    imagem: "/homemcafe.jpg", // Substitua pelo caminho real da imagem
  },
  {
    nome: "King Coffee - Rio de Janeiro",
    endereco: "Praça King Coffee, 789",
    cidade: "Rio de Janeiro",
    telefone: "(21) 9999-9999",
    horario: "Segunda a Sexta, das 8h às 17h",
    imagem: "/homemcafe.jpg", // Substitua pelo caminho real da imagem
  },
  {
    nome: "King Coffee - Belo Horizonte",
    endereco: "Rua King Coffee, 321",
    cidade: "Belo Horizonte",
    telefone: "(31) 9999-9999",
    horario: "Segunda a Sexta, das 8h às 17h",
    imagem: "/homemcafe.jpg", // Substitua pelo caminho real da imagem
  },
  {
    nome: "King Coffee - Recife",
    endereco: "Avenida Recife, 654",
    cidade: "Recife",
    telefone: "(81) 9999-9999",
    horario: "Segunda a Sexta, das 8h às 17h",
    imagem: "/homemcafe.jpg", // Substitua pelo caminho real da imagem
  },
  {
    nome: "King Coffee - Salvador",
    endereco: "Rua Salvador, 789",
    cidade: "Salvador",
    telefone: "(71) 9999-9999",
    horario: "Segunda a Sexta, das 9h às 18h",
    imagem: "/homemcafe.jpg", // Substitua pelo caminho real da imagem
  },
];

const LojasPage = () => {
  return (
    <section className="lojas bg-background text-black py-8 lg:py-16" id="lojas">
      <h1 className="text-4xl lg:text-5xl font-bold mt-20 mb-10 lg:mb-12 text-white text-center lg:text-center">
        Nossas Lojas
      </h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {lojas.map((loja, index) => (
          <div key={index} className="loja bg-gray-100 p-6 rounded-lg shadow-md">
            <Image
              src={loja.imagem}
              alt={`Imagem da loja ${loja.nome}`}
              className="mb-4 rounded-lg m-auto"
            />
            <h2 className="text-2xl text-center font-bold mb-2">{loja.nome}</h2>
            <p className="text-base m-auto mb-4 flex items-center justify-center">
              <FaMapMarkerAlt className="mr-2" />
              {loja.endereco}
            </p>
            <p className="text-base m-auto mb-4 flex items-center justify-center">
              <FaPhone className="mr-2" />
              {loja.telefone}
            </p>
            <p className="text-base m-auto mb-4 flex items-center justify-center">
              <FaCity className="mr-2" />
              {loja.cidade}
            </p>
            <p className="text-base m-auto mb-4 flex items-center justify-center">
              <FaClock className="mr-2" />
              {loja.horario}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LojasPage;
