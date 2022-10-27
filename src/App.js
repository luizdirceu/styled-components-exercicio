import React from "react";
import CardVideo from "./Componentes/CardVideo";
import "./styles.css";
import { GlobalStayled } from "./GlobalStyle";
import {EstilizarHeader} from "./Componentes/style"
import {EstilizarMain} from "./Componentes/style"
import {EstilizarNav} from "./Componentes/style"

export default function App() {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  return (
    <div>
      <GlobalStayled/>
    
      <div className="tela-inteira">
        <EstilizarHeader>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </EstilizarHeader>

        <EstilizarMain>
          <EstilizarNav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </EstilizarNav>

          <section className="painel-de-videos">
            <CardVideo
              image1={card1.imagemDoVideo}
              titulo={card1.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
          </section>
        </EstilizarMain>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
