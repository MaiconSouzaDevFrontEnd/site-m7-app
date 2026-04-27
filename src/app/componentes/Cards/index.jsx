import Image from 'next/image';
import estilos from "./Card.module.css";

export default function Cards({ produto }) {
  return (
    <div className={estilos.card}>

      <figure className={estilos.figure}>
        <Image
          src={produto.imagem}
          className={estilos.img}
          alt={produto.nome}
          width={250}
          height={280}
        />
      </figure>
      <div className={estilos.container_informacoes}>
        <div className={estilos.container_descricao}>
          <h3>{produto.nome}</h3>
          <small>{produto.categoria}</small>
          <p className={estilos.descricao}>{produto.descricao}</p>
        </div>
        <div>
          <span>{new Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL"}).format(produto.preco)}</span>
        </div>
      </div>
    </div>
  );
}