import React from 'react';

const produtos = [
  {
    nome: 'King Coffee',
    descricao: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    preco: 5.99,
    imagem: './coffee.png', // Substitua pelo caminho real da imagem
  },
  {
    nome: 'King Coffee',
    descricao: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    preco: 7.99,
    imagem: './coffee.png', // Substitua pelo caminho real da imagem
  },
  {
    nome: 'King Coffee',
    descricao: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    preco: 6.99,
    imagem: './coffee.png', // Substitua pelo caminho real da imagem
  },
  {
    nome: 'King Coffee',
    descricao: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    preco: 6.99,
    imagem: './coffee.png', // Substitua pelo caminho real da imagem
  },
  {
    nome: 'King Coffee',
    descricao: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    preco: 5.99,
    imagem: './coffee.png', // Substitua pelo caminho real da imagem
  },
  {
    nome: 'King Coffee',
    descricao: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    preco: 7.99,
    imagem: './coffee.png', // Substitua pelo caminho real da imagem
  },
  {
    nome: 'King Coffee',
    descricao: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    preco: 6.99,
    imagem: './coffee.png', // Substitua pelo caminho real da imagem
  },
  {
    nome: 'King Coffee',
    descricao: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    preco: 6.99,
    imagem: './coffee.png', // Substitua pelo caminho real da imagem
  },
  {
    nome: 'King Coffee',
    descricao: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    preco: 5.99,
    imagem: './coffee.png', // Substitua pelo caminho real da imagem
  },
  {
    nome: 'King Coffee',
    descricao: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    preco: 7.99,
    imagem: './coffee.png', // Substitua pelo caminho real da imagem
  },
  {
    nome: 'King Coffee',
    descricao: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    preco: 6.99,
    imagem: './coffee.png', // Substitua pelo caminho real da imagem
  },
  {
    nome: 'King Coffee',
    descricao: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    preco: 6.99,
    imagem: './coffee.png', // Substitua pelo caminho real da imagem
  },

  
];

export default function ProdutosVenda() {
  return (
    <section className="container mx-auto py-8">
        
      <h1 className="text-4xl font-bold mt-28 text-primaria mb-8 text-center">Nossos Produtos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {produtos.map((produto, index) => (
          <div key={index} className="rounded-lg bg-white overflow-hidden shadow-lg">
            <img src={produto.imagem} alt={produto.nome} className="w-auto h-36 m-auto object-cover" />
            <div className="p-4">
              <h2 className="text-xl text-black font-semibold mb-2">{produto.nome}</h2>
              <p className="text-gray-800 mb-4">{produto.descricao}</p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-primaria font-bold">R$ {produto.preco.toFixed(2)}</p>
                </div>
                <button className="bg-primaria items-center text-black px-4 py-2 rounded-lg hover:bg-secundaria transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primaria">Comprar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
