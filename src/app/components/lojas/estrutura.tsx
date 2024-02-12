import React from 'react';
import Image from 'next/image';

export default function Estruturas() {
  return (
    <main>
      <section className="container text-black mx-auto py-8">
        <h1 className="text-4xl pt-36 text-white font-bold text-primary mb-8 text-center">Qualidade das Cafeterias</h1>
        <div className="grid grid-cols-1 gap-8">
          <div className="rounded-lg bg-white overflow-hidden shadow-lg flex flex-col sm:flex-row">
            <Image src="./historia3.jpg" alt="Cafeteria 1" className="w-full object-cover h-64 sm:w-64 sm:h-auto md:w-1/3 md:h-auto" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">King Coffee</h2>
              <p className="text-gray-800 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis turpis id ex sodales consectetur nec eu massa.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis turpis id ex sodales consectetur nec eu massa.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis turpis id ex sodales consectetur nec eu massa.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-white overflow-hidden shadow-lg flex flex-col sm:flex-row">
            <Image src="./historia2.jpg" alt="Cafeteria 2" className="w-full sm:hidden object-cover h-64 sm:w-64 sm:h-auto md:w-1/3 md:h-auto" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">King Coffee</h2>
              <p className="text-gray-800 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis turpis id ex sodales consectetur nec eu massa.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis turpis id ex sodales consectetur nec eu massa.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis turpis id ex sodales consectetur nec eu massa.
              </p>
            </div>
            <Image src="./historia2.jpg" alt="Cafeteria 2" className="w-full hidden sm:flex object-cover h-64 sm:w-64 sm:h-auto md:w-1/3 md:h-auto" />
          </div>

          <div className="rounded-lg bg-white overflow-hidden shadow-lg flex flex-col sm:flex-row">
            <Image src="./copocafe.jpg" alt="Cafeteria 3" className="w-full object-cover h-64 sm:w-64 sm:h-auto md:w-1/3 md:h-auto" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">King Coffee</h2>
              <p className="text-gray-800 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis turpis id ex sodales consectetur nec eu massa.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis turpis id ex sodales consectetur nec eu massa.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis turpis id ex sodales consectetur nec eu massa.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-white overflow-hidden shadow-lg flex flex-col sm:flex-row">
            <Image src="./historia1.jpg" alt="Cafeteria 2" className="w-full sm:hidden object-cover h-64 sm:w-64 sm:h-auto md:w-1/3 md:h-auto" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">King Coffee</h2>
              <p className="text-gray-800 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis turpis id ex sodales consectetur nec eu massa.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis turpis id ex sodales consectetur nec eu massa.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis turpis id ex sodales consectetur nec eu massa.
              </p>
            </div>
            <Image src="./historia1.jpg" alt="Cafeteria 2" className="w-full hidden sm:flex object-cover h-64 sm:w-64 sm:h-auto md:w-1/3 md:h-auto" />
          </div>
        </div>

      </section>
    </main>
  );
}
