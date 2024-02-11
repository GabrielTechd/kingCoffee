import ConvidarLoja from "@/app/components/lojas/convite";
import Estruturas from "@/app/components/lojas/estrutura";
import LojasLocal from "@/app/components/lojas/lojas";

export default function Lojas() {
  return (
    <main>
      <div >
        <Estruturas />
        <LojasLocal />
        <ConvidarLoja />
      </div>
    </main>

  );
}
