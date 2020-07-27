import React from 'react'
import Card from './Card';

export default ({t1, t2, description}) => {

    let videos = [
        {img:"../assets/images/2.webp", impact:"Comportamento Encapsulado", title:"Encapsulamento", content:"Um dos maiores desafios da OO é entender e usar seus recurso. Que tal ver um pouquinho sobre como usar encapsulamento...", link:"localhost:3000"},
        {img:"../assets/images/1.webp", impact:"Null Pointer como nunca", title:"NullPointer UUUU", content:"Não fuja do NullPointer, entenda ele. Neste vídeo veremos um caso atipico...", link:"localhost:3000"},
        {img:"../assets/images/5.webp", impact:"Pra quem gosta de pscina", title:"Pool de Strings", content:"Entenda como o java monta cache de Strings e outros tipos de variaveis...", link:"localhost:3000"},
    ]


    return (
        <section className="section" id="trainers">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-heading">
                        <h2>{t1} <em>{t2}</em></h2>
                        <img src="../assets/images/line-dec.png" alt="" />
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <Card {...videos[0]} />
                <Card {...videos[1]} />
                <Card {...videos[2]} />
            </div>
            <br />
        </div>
    </section>

    );
}