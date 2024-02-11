import React from 'react';

export default function ConvidarLoja() {
  return (
    <div className="flex flex-col justify-center items-center sm:items-start h-full px-6 md:px-10 lg:px-16">
      <h1 className="text-primaria mt-8 sm:mt-2 text-3xl md:text-4xl lg:text-6xl font-bold mb-2">KingCoffee</h1>
      <h2 className="text-texto text-lg md:text-xl lg:text-2xl font-bold mb-4">Venha conhecer</h2>
      <div className="bg-secundaria h-1 w-10 mb-4"></div>
      <div className="max-w-2xl"> {/* Definindo a largura máxima */}
        <p className="text-texto mb-10 text-base md:text-lg lg:text-xl leading-relaxed text-start">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias facere aspernatur repudiandae amet deleniti. Eius sint, cum corrupti repellendus dicta fugiat numquam asperiores quod tempore quibusdam commodi reprehenderit, doloribus atque?
        </p>
      </div>
    </div>
  );
}
