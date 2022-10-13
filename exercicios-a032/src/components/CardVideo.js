import React from "react";
import {InfoUsuario} from "./InfoUsuario";

export function CardVideo(props) {
  const usuario1 = {
    nomeUsuario: "Joaozinho",
    imagemUsuario: "https://picsum.photos/70/70?a=6"
  }
  
  return (
    <div>
      <div className="box-pagina-principal" onClick={props.reproduzVideo}>
        <img src={props.video.imagem} alt="" />
        <h4>{props.video.titulo}</h4>
        <InfoUsuario usuario={usuario1}/>
      </div>
    </div>
  );
}