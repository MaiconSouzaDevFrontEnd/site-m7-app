
import React from "react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Bem-vindo ao M7 InformaticaRP</h1>
        <p className={styles.description}>
          O site oficial do M7 InformaticaRP - Sua fonte de notícias, eventos e
          informações sobre o servidor de roleplay mais emocionante!
        </p>
        <div className={styles.grid}>
          <a href="/noticias" className={styles.card}>
            <h2>Notícias &rarr;</h2>
            <p>Fique por dentro das últimas novidades e atualizações do M7 InformaticaRP.</p>
          </a>
          <a href="/eventos" className={styles.card}>
            <h2>Eventos &rarr;</h2>
            <p>Confira os próximos eventos, competições e atividades emocionantes no servidor.</p>
          </a>
          <a href="/comunidade" className={styles.card}>
            <h2>Comunidade &rarr;</h2>
            <p>Conheça a comunidade do M7 InformaticaRP, participe de fóruns e interaja com outros jogadores.</p>
          </a>
          <a href="/suporte" className={styles.card}>
            <h2>Suporte &rarr;</h2>
            <p>Precisa de ajuda? Acesse nossa seção de suporte para resolver suas dúvidas e problemas.</p>
          </a>
        </div>  
      </main>
    </div>
  );
}
