import Image from "next/image";
import Divisor2 from "../assets/divisor-2.png";
import Divisor from "../assets/divisor.png";

import Canto from "../assets/canto.png";

export default function Home() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <h1 className="mt-16 flex flex-col gap-4 text-2xl text-amber-400/80">
        CARDÁPIO DE<span className="font-great text-7xl text-white">Natal</span>
      </h1>
      <Image src={Divisor} alt="Divisor" className="mt-8 h-20 object-contain" />
      <h2 className="mt-10 font-great text-4xl text-amber-400/80">Carnes</h2>
      <ul className="flex flex-col divide-y divide-amber-400/50 ">
        <li className="w-full py-2 text-center">Paleta com calda de abacaxi</li>
        <li className="w-full py-2 text-center">Ave natalina com pêssegos</li>
        <li className="w-full py-2 text-center">Tilápia ao molho de palmito</li>
        <li className="w-full py-2 text-center">Salpicão de frango</li>
      </ul>
      <Image src={Divisor2} alt="Divisor" className="h-20 object-contain" />
      <h2 className="mt-10 font-great text-4xl text-amber-400/80">
        Acompanhamentos
      </h2>
      <ul className="flex flex-col divide-y divide-amber-400/50 ">
        <li className="w-full py-2 text-center">
          Salada de folhas e granola salgada ao molho de manga
        </li>
        <li className="w-full py-2 text-center">
          Farofa de panko com bacon e castanhas
        </li>
        <li className="w-full py-2 text-center">
          Raviolli de ricota com ervas finas
        </li>
        <li className="w-full py-2 text-center">
          Risotto de tomate seco e rúcula
        </li>
      </ul>
      <Image src={Divisor} alt="Divisor" className="h-20 object-contain" />
      <h2 className="mt-10 font-great text-4xl text-amber-400/80">
        Sobremesas
      </h2>
      <ul className="flex flex-col divide-y divide-amber-400/50 ">
        <li className="w-full py-2 text-center">
          Panacotta de com calda de frutas vermelhas
        </li>
        <li className="w-full py-2 text-center">Folhado de Nutella</li>
      </ul>
      <div className="-mx-16 flex">
        <Image src={Canto} alt="Canto" className=" w-1/2 scale-y-[-1]" />
        <Image
          src={Canto}
          alt="Canto"
          className=" w-1/2 scale-x-[-1] scale-y-[-1]"
        />
      </div>
    </div>
  );
}
