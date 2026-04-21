import Image from 'next/image';
import estilos from "./Categorias.module.css";

const icone1 = "/public/icones/informatica.svg";
const icone2 = "/public/icones/carregadores.svg";
const icone3 = "/public/icones/cabos.svg";
const icone4 = "/public/icones/termicos.svg";
const icone5 = "/public/icones/fone-de-ouvido.svg";
const icone6 = "/public/icones/brinquedos.svg";
const icone7 = "/public/icones/cozinha.svg";
const icone8 = "/public/icones/relogio.svg";
const icone9 = "/public/icones/roupas.svg";
const icone10 = "/public/icones/acessorios.svg";

export default function Categorias({ handleFiltro, botaoClicado }) {
  return (
    <section className={estilos.secao_categorias}>
      <div className={estilos.container_botoes}>
        <button className={botaoClicado === "Informatica" ? estilos.acenderBtn : estilos.apagarBtn}
          onClick={() => handleFiltro("Informatica")}>
          <Image className={estilos.icone} src={icone1} alt="ícone" width={128} height={128} />
          <span>Informática</span>
        </button>
        <button className={botaoClicado === "Carregadores" ? estilos.acenderBtn : estilos.apagarBtn}
          onClick={() => handleFiltro("Carregadores")}>
          <Image className={estilos.icone} src={icone2} alt="ícone" width={128} height={128} />
          <span>Carregadores</span>
        </button>
        <button className={botaoClicado === "Cabos" ? estilos.acenderBtn : estilos.apagarBtn}
          onClick={() => handleFiltro("Cabos")}>
          <Image className={estilos.icone} src={icone3} alt="ícone" width={128} height={128} />
          <span>Cabos</span>
        </button>
        <button className={botaoClicado === "Termicos" ? estilos.acenderBtn : estilos.apagarBtn}
          onClick={() => handleFiltro("Termicos")}>
          <Image className={estilos.icone} src={icone4} alt="ícone" width={128} height={128} />
          <span>Térmicos</span>
        </button>
        <button className={botaoClicado === "fone-de-ouvido" ? estilos.acenderBtn : estilos.apagarBtn}
          onClick={() => handleFiltro("fone-de-ouvido")}>
          <Image className={estilos.icone} src={icone5} alt="ícone" width={128} height={128} />
          <span>Fone de Ouvido</span>
        </button>
        <button className={botaoClicado === "Brinquedos" ? estilos.acenderBtn : estilos.apagarBtn}
          onClick={() => handleFiltro("Brinquedos")}>
          <Image className={estilos.icone} src={icone6} alt="ícone" width={128} height={128} />
          <span>Brinquedos</span>
        </button>
         <button className={botaoClicado === "Cozinha" ? estilos.acenderBtn : estilos.apagarBtn}
          onClick={() => handleFiltro("Cozinha")}>
          <Image className={estilos.icone} src={icone7} alt="ícone" width={128} height={128} />
          <span>Cozinha</span>
        </button>
         <button className={botaoClicado === "Relogio" ? estilos.acenderBtn : estilos.apagarBtn}
          onClick={() => handleFiltro("Relogio")}>
          <Image className={estilos.icone} src={icone8} alt="ícone" width={128} height={128} />
          <span>Relógio</span>
        </button>
        <button className={botaoClicado === "Roupas" ? estilos.acenderBtn : estilos.apagarBtn}
          onClick={() => handleFiltro("Roupas")}>
          <Image className={estilos.icone} src={icone9} alt="ícone" width={128} height={128} />
          <span>Roupas</span>
        </button>
        <button className={botaoClicado === "Acessorios" ? estilos.acenderBtn : estilos.apagarBtn}
          onClick={() => handleFiltro("Acessorios")}>
          <Image className={estilos.icone} src={icone10} alt="ícone" width={128} height={128} />
          <span>Acessórios</span>
        </button>
      </div>
    </section>
  );
}