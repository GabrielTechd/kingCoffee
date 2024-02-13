import { IoIosArrowForward } from "react-icons/io";

export default function King() {

    return (
        <main>
            <div className="relative">
                <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
                <div
                    className="bg-cover bg-center min-h-[76vh] sm:min-h-[50vh] shadow-lg"
                    style={{ backgroundImage: `url('./cafebalcao.jpg')` }}
                >
                    <div className="absolute inset-0" style={{ backdropFilter: 'blur(8px)' }}>

                        <div className="flex flex-col justify-center items-center sm:items-start h-full px-6 md:px-10 lg:px-16">
                            <h1 className="text-primaria mt-8 sm:mt-2 text-3xl md:text-4xl lg:text-6xl font-bold mb-2">KingCoffee</h1>
                            <h2 className="text- text-lg md:text-xl lg:text-2xl font-bold mb-4">Porque nós?</h2>
                            <div className="bg-secundaria h-1 w-10 mb-4"></div>
                            <div className="max-w-2xl"> {/* Definindo a largura máxima */}
                                <p className="text-white mb-10 text-base md:text-lg lg:text-xl leading-relaxed">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias facere aspernatur repudiandae amet deleniti. Eius sint, cum corrupti repellendus dicta fugiat numquam asperiores quod tempore quibusdam commodi reprehenderit, doloribus atque?
                                </p>
                            </div>

                            <div className="m-auto sm:m-0 hidden sm:flex">
                                <a href="/produtos" className="py-4 px-4 border-t border-b">Veja nossos produtos</a>
                                <a href="/sobre" className="py-4 px-4 flex items-center border-t border-b border-l">Saiba mais sobre nós <IoIosArrowForward className="ml-2" /> </a>
                            </div>
                            <div className="flex sm:hidden flex-col m-auto sm:m-0 gap-4">
                                <a href="/produtos" className="py-4 px-4 border">Veja nossos produtos</a>
                                <a href="/sobre" className="py-4 px-4 flex items-center border">Saiba mais sobre nós <IoIosArrowForward className="ml-2" /> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-background h-auto relative">
                <div className="text-center mb-0 mt-1">
                    <h1 className="text-2xl">Ficou curioso e quer conhecer?</h1>
                    <h2 className="text-primaria">Adquira nosso Produto</h2>
                </div>
                <img src="./coffee.png" alt="produto cafe" className="mx-auto h-56 w-auto mt-4" />
                <div className="text-center">
                    <a href="/produtos" className="border font-bold text-white mb-2 px-6 py-3 rounded-md mt-4 inline-block hover:bg-primaria hover:text-black duration-500 shadow-md">Compre agora</a>
                </div>
            </div>

        </main>
    );
}
