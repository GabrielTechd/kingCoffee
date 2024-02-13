import { IoIosArrowForward } from "react-icons/io";
import { HiMiniArrowUturnDown } from "react-icons/hi2";

export default function BemVindo() {
  return (
    <main className="relative bg-white h-auto">
      <div className="relative">
        <div
          className="bg-cover bg-center h-[48vh] sm:h-[60vh] md:h-[60vh] lg:h-[65vh] xl:h-[70vh] shadow-lg"
          style={{ backgroundImage: `url('./copocafe.jpg')` }}
        >
          <div className="absolute inset-0 bg-black opacity-45"></div>
          <div className="absolute inset-0 gap-2 flex flex-col justify-center items-center text-white text-center px-1">
            <h1 className="text-primaria text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">King Coffee</h1>
            <p className=" text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">Nossa Historia</p>
            <div className="h-1 sm:w-96 w-40 m-3 bg-primaria"></div>
            <h2 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold">Lorem ipsum dolor sit amet.</h2>
            <p className=" text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, modi.</p>
          </div>
        </div>
      </div>

      <div className="sm:ml-10 sm:mr-10 flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <img src="./historia1.jpg" alt="homem fazendo cafe" className="object-contain h-auto lg:h-[100%] w-full" />
        </div>

        <div className=" ml-2 lg:w-1/2 lg:ml-10 lg:mt-0">
          <div style={{ maxWidth: '1800px' }}>
            <p className="text-destaque mt-5 md:mt-16">Nossa história</p>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">King Coffee</h1>
            <div className="w-24 h-1 mb-2 bg-secundaria"></div>
            <div className="max-w-2xl">
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellat porro, minima, quaerat cum similique in dignissimos, perspiciatis suscipit rem earum corporis. Accusantium soluta repellat odio doloremque nemo placeat ullam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam amet voluptates mollitia quidem magnam, voluptate vero cupiditate consequatur, deleniti explicabo delectus beatae tempora nobis, corporis odio reprehenderit aliquid voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam amet voluptates mollitia quidem magnam, voluptate vero cupiditate consequatur, deleniti explicabo delectus beatae tempora nobis, corporis odio reprehenderit aliquid voluptatum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-1 my-5 md:my-10 bg-secundaria"></div>
      {/* Texto à esquerda e foto à direita */}
      <div className="sm:ml-10 sm:mr-10 flex flex-col lg:flex-row">
        <div className="ml-2 lg:flex lg:flex-col lg:items-end lg:w-1/2 order-2 lg:order-1">
          <div style={{ maxWidth: '1800px' }}>
            <p className="text-destaque mt-5 md:mt-16">Nossas lojas</p>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">King Coffee</h1>
            <div className="w-24 h-1 mb-2 bg-secundaria"></div>
            <div className="max-w-2xl">
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellat porro, minima, quaerat cum similique in dignissimos, perspiciatis suscipit rem earum corporis. Accusantium soluta repellat odio doloremque nemo placeat ullam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam amet voluptates mollitia quidem magnam, voluptate vero cupiditate consequatur, deleniti explicabo delectus beatae tempora nobis, corporis odio reprehenderit aliquid voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam amet voluptates mollitia quidem magnam, voluptate vero cupiditate consequatur, deleniti explicabo delectus beatae tempora nobis, corporis odio reprehenderit aliquid voluptatum.
              </p>
            </div>
          </div>
        </div>
        <div className="mb lg:w-1/2 order-1 lg:order-2 mt-10 lg:mt-0">
          <img src="./historia2.jpg" alt="homem fazendo cafe" className="object-contain h-auto lg:h-[90%] w-full sm:w-95" />
        </div>
      </div>

      <div className="w-full h-1 my-5 md:my-10 bg-secundaria"></div>

      <div className="sm:ml-10 sm:mr-10 flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <img src="./roçacafe.jpg" alt="homem fazendo cafe" className="object-contain h-auto lg:h-[100%] w-full" />
        </div>

        <div className=" ml-2 lg:w-1/2 lg:ml-10 lg:mt-0">
          <div style={{ maxWidth: '1800px' }}>
            <p className="text-destaque mt-5 md:mt-16">da roça</p>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">King Coffee</h1>
            <div className="w-24 h-1 mb-2 bg-secundaria"></div>
            <div className="max-w-2xl">
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellat porro, minima, quaerat cum similique in dignissimos, perspiciatis suscipit rem earum corporis. Accusantium soluta repellat odio doloremque nemo placeat ullam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam amet voluptates mollitia quidem magnam, voluptate vero cupiditate consequatur, deleniti explicabo delectus beatae tempora nobis, corporis odio reprehenderit aliquid voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam amet voluptates mollitia quidem magnam, voluptate vero cupiditate consequatur, deleniti explicabo delectus beatae tempora nobis, corporis odio reprehenderit aliquid voluptatum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-1 my-5 md:my-10 bg-secundaria"></div>
      {/* Texto à esquerda e foto à direita */}
      <div className="sm:ml-10 sm:mr-10 flex flex-col lg:flex-row">
        <div className="ml-2 lg:flex lg:flex-col lg:items-end lg:w-1/2 order-2 lg:order-1">
          <div style={{ maxWidth: '1800px' }}>
            <p className="text-destaque mt-5 md:mt-16">Até seu copo</p>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">King Coffee</h1>
            <div className="w-24 h-1 mb-2 bg-secundaria"></div>
            <div className="max-w-2xl">
              <p className="text-sm text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellat porro, minima, quaerat cum similique in dignissimos, perspiciatis suscipit rem earum corporis. Accusantium soluta repellat odio doloremque nemo placeat ullam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam amet voluptates mollitia quidem magnam, voluptate vero cupiditate consequatur, deleniti explicabo delectus beatae tempora nobis, corporis odio reprehenderit aliquid voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam amet voluptates mollitia quidem magnam, voluptate vero cupiditate consequatur, deleniti explicabo delectus beatae tempora nobis, corporis odio reprehenderit aliquid voluptatum.
              </p>
            </div>
          </div>
        </div>
        <div className="mb lg:w-1/2 order-1 lg:order-2 mt-10 lg:mt-0">
          <img src="./historia3.jpg" alt="homem fazendo cafe" className="object-contain h-auto lg:h-[90%] w-full sm:w-95" />
        </div>
      </div>
    </main>
  );
}
