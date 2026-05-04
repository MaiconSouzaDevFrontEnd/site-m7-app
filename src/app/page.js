'use client';
/* import Image from 'next/image'; */
import estilos from "./page.module.css";
import { useState, useEffect } from "react";
import {filtrarProdutos,buscarProduto,produtosEntradas,} from "./servico";
import Cards from './componentes/Cards';
import Categorias from './componentes/Categorias';
import CampoDeBusca from './componentes/CampoDeBusca';
/* 
import Banner from "@/../public/banner.png"; */

export default function Home() {

  const [dadosFiltrados, setDadosFiltrados] = useState([]);
  const [textoBuscaDigitado, setTextoBuscaDigitado] = useState("");
  const [botaoClicado, setBotaoClicado] = useState("Entradas");

  useEffect(() => {
    setDadosFiltrados(produtosEntradas);
  }, []);

  const handleBusca = (textoDigitado) => {
    setTextoBuscaDigitado(textoDigitado);
    textoDigitado.length >= 2 && setDadosFiltrados(buscarProduto(textoDigitado));
    setBotaoClicado("");
  };

  const handleFiltro = (categoria) => {
    setTextoBuscaDigitado("");
    setDadosFiltrados(filtrarProdutos(categoria));
    setBotaoClicado(categoria);
  };

  return (
    <main className={estilos.page}>
      
      <header className={estilos.topo}>
      
        <div>
          
          <div>
            <Categorias handleFiltro={handleFiltro} botaoClicado={botaoClicado}/>
          </div>
          <div>
            <CampoDeBusca textoBuscaDigitado={textoBuscaDigitado}handleBusca={handleBusca}/>
          </div>
          <h1>M7-Catálogo</h1>
          <p>
          
          </p>
        </div>

      </header>

      <main className={estilos.container_principal}>
       
        <section className={estilos.secao_cards}>
          <h2>Catálogo</h2>
          <div className={estilos.container_cards}>
            {dadosFiltrados.map((produto) => (
              <Cards key={produto.id} produto={produto}  />
            ))}
          </div>
        </section>

      </main>
    </main>
  )
}