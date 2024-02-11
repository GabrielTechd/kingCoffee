import { IoIosArrowForward } from "react-icons/io";
import { HiMiniArrowUturnDown } from "react-icons/hi2";

export default function Inicio() {
  return (
    <main>
      <div
        className="bg-scroll bg-center bg-cover relative"
        style={{
          backgroundImage: `url('./backgroudg.jpg')`,
          height: "100vh",
        }}
      >
        <div className="absolute inset-0 bg-gray-800 opacity-50"></div>

        <div
          className="flex items-center justify-center h-full relative"
          style={{ backdropFilter: "blur(8px)" }}
        >
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-10">
              <h1 className="fontes text-4xl lg:text-8xl mb-5 font-bold text-white">- King Coffee -</h1>
              <h2 className="text-base lg:text-3xl font-semibold">Sua cafeteria de cada dia</h2>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center mb-10">
              <a href="/" className="py-3 flex items-center px-6 mb-4 lg:mb-0 rounded-full border-2 hover:bg-secundaria hover:text-black duration-500 font-semibold mr-0 lg:mr-4">Nossas lojas <IoIosArrowForward className="ml-2" />
              </a>
              <a href="/" className="py-3 flex items-center px-6 rounded-full border-2 hover:bg-primaria hover:text-black duration-500 font-semibold">Saiba mais <IoIosArrowForward className="ml-2" /></a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full py-4">
          <div className="container mx-auto text-center">
            <h1 className="text-lg md:text-lg lg:text-lg font-bold text-texto mb-2">Desça e descubra</h1>
            <div className="flex justify-center items-center">
              <HiMiniArrowUturnDown className="text-4xl md:text-xl lg:text-xl text-primary" />
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
