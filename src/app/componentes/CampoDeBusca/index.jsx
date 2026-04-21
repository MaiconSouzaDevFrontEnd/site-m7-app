import Image from 'next/image';
import estilos from "./CampoDeBusca.module.css";
import Lupa from "@/../public/icones/lupa.svg";

export default function CampoDeBusca({ textoBuscaDigitado, handleBusca }) {
  return (
    <div className={estilos.container}>
      <Image className={estilos.icone} src={Lupa} alt="icone"/>
      <input
        type="text"
        value={textoBuscaDigitado}
        onChange={(event) => handleBusca(event.target.value)}
        placeholder="Pesquise seu produto"
      />
    </div>
  );
}