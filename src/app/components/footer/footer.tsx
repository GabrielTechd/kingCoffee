import { IoIosArrowForward } from "react-icons/io";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiVisa, SiMastercard, SiAmericanexpress } from "react-icons/si";

export default function Footer() {
    return (
        <footer className="bg-gray-200 text-black py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col items-center md:items-start">
                    <img src="./logo.png" alt="Logo da Marca" className="w-20 mb-2" />
                    <p className="text-lg font-bold">King Coffee</p>
                    <p className="text-sm text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, reprehenderit.</p>
                    <div className="flex items-center space-x-2">
                        <p className="text-sm">Descubra-as</p>
                        <IoIosArrowForward />
                    </div>
                </div>
                <div className="flex flex-col items-center text-center sm:text-start md:items-start">
                    <p className="text-lg font-bold mb-2">FAQ</p>
                    <ul className="cursor-pointer">
                        <li className="mb-1 text-sm">Como posso fazer um pedido?</li>
                        <li className="mb-1 text-sm">Quais são os métodos de pagamento aceitos?</li>
                        <li className="mb-1 text-sm">Qual é a política de devolução?</li>
                        <li className="mb-1 text-sm">Como posso entrar em contato com o suporte ao cliente?</li>
                        <li className="mb-1 text-sm">Quais são os horários de funcionamento?</li>
                        {/* Adicione mais perguntas frequentes conforme necessário */}
                    </ul>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <p className="text-lg font-bold mb-2">IDIOMA</p>
                    <div className="relative inline-block">
                        <select className="appearance-none text-center bg-white border px-6 py-1 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option>PT</option>
                            {/* Adicione mais opções de idioma conforme necessário */}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <IoIosArrowForward />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center md:justify-end space-x-4">
                    <p className="text-lg font-bold">NOS SIGA:</p>
                    <div className="flex space-x-4">
                        <FaFacebook color="#3b5998" size={24} />
                        <FaInstagram color="#e4405f" size={24} />
                        <FaTwitter color="#1da1f2" size={24} />
                        <FaLinkedin color="#0077b5" size={24} />
                    </div>
                </div>
            </div>
            <div className="text-center pt-4">
                <p className="text-sm">Direitos Autorais &copy; 2023 King Coffee. Todos os direitos reservados.</p>
                <div className="flex justify-center mt-2 space-x-2">
                    <SiVisa color="#1a1f71" size={24} />
                    <SiMastercard color="#ff5f00" size={24} />
                    <SiAmericanexpress color="#0078d4" size={24} />
                </div>
            </div>
        </footer>
    );
}
