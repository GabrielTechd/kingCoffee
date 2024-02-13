import { IoIosArrowForward } from "react-icons/io";
import { HiMiniArrowUturnDown } from "react-icons/hi2";

export default function Noticias() {
    return (
        <main className="h-auto bg-white">
            {/* Texto à direita e foto à esquerda */}
            <div className="sm:ml-10 sm:mr-10 flex flex-col lg:flex-row">
                <div className="lg:w-1/2 md:mt-10">
                    <img src="./homemcafe.jpg" alt="homem fazendo cafe" className="object-contain h-auto lg:h-[100%] w-full" />
                </div>

                <div className=" ml-2 lg:w-1/2 lg:ml-10 lg:mt-0">
                    <div style={{ maxWidth: '1800px' }}>
                        <p className="text-destaque mt-5 md:mt-16">nossa história</p>
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">King Coffee</h1>
                        <div className="w-24 h-1 mb-2 bg-secundaria"></div>
                        <div className="max-w-2xl">
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellat porro, minima, quaerat cum similique in dignissimos, perspiciatis suscipit rem earum corporis. Accusantium soluta repellat odio doloremque nemo placeat ullam.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam amet voluptates mollitia quidem magnam, voluptate vero cupiditate consequatur, deleniti explicabo delectus beatae tempora nobis, corporis odio reprehenderit aliquid voluptatum.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam amet voluptates mollitia quidem magnam, voluptate vero cupiditate consequatur, deleniti explicabo delectus beatae tempora nobis, corporis odio reprehenderit aliquid voluptatum.
                            </p>
                        </div>
                        <a href="/historia" className="text-destaque hover:text-secundaria duration-700 inline-flex items-center">
                            Leia mais <IoIosArrowForward className="ml-1" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full h-1 my-5 md:my-10 bg-secundaria"></div>
            {/* Texto à esquerda e foto à direita */}
            <div className="sm:ml-10 sm:mr-10 flex flex-col lg:flex-row">
                <div className="ml-2 lg:flex lg:flex-col lg:items-end lg:w-1/2 order-2 lg:order-1">
                    <div style={{ maxWidth: '1800px' }}>
                        <p className="text-destaque mt-5 md:mt-16">da roça até seu copo</p>
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">King Coffee</h1>
                        <div className="w-24 h-1 mb-2 bg-secundaria"></div>
                        <div className="max-w-2xl">
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellat porro, minima, quaerat cum similique in dignissimos, perspiciatis suscipit rem earum corporis. Accusantium soluta repellat odio doloremque nemo placeat ullam.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam amet voluptates mollitia quidem magnam, voluptate vero cupiditate consequatur, deleniti explicabo delectus beatae tempora nobis, corporis odio reprehenderit aliquid voluptatum.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam amet voluptates mollitia quidem magnam, voluptate vero cupiditate consequatur, deleniti explicabo delectus beatae tempora nobis, corporis odio reprehenderit aliquid voluptatum.
                            </p>
                            <a href="/historia" className="text-destaque hover:text-secundaria duration-700 inline-flex items-center">
                                Leia mais <IoIosArrowForward className="ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mb lg:w-1/2 order-1 lg:order-2 mt-10 lg:mt-0">
                    <img src="./roçacafe.jpg" alt="homem fazendo cafe" className="object-contain h-auto lg:h-[90%] w-full sm:w-95" />
                </div>
            </div>
        </main>
    );
}
