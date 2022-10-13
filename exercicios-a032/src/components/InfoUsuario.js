import React from "react"
export function InfoUsuario(props){
    return(
        <div className="imgUsuario">
           <p><img src={props.usuario.imagemUsuario} alt="" />{props.usuario.nomeUsuario}</p>
        </div>
        )
}