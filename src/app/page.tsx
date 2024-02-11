import Inicio from "./components/home/home";
import LocalCafe from "./components/home/King";
import Noticias from "./components/home/noticias";
import "./globals.css"

export default function Home() {
  return (
    <main>
      <div>
        <Inicio />
        <Noticias />
        <LocalCafe />
      </div>
    </main>

  );
}
