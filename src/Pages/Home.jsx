import React from 'react'
import MainBanner from '../components/MainBanner'
import Cards from '../components/Cards'
import videos from '../data/dr.java.json'
import projects from '../data/projetos.json'
import Projects from '../components/Projetcts'

export default () => {

    return (
        <React.Fragment>
            <MainBanner 
                link={{title:"youtube", path:"https://www.youtube.com/channel/UCBzFDQ_eCQ8xiBv9vCiCQGw"}}
                subtitle="Skinin the game!" />
            <Cards t1="Dicas" t2="Rápidas" description="Série de videos que mostram algumas dicas simples sobre o desenvolvimento Java." videos={videos}/>
            <Projects projects={projects} />
            <footer />
        </React.Fragment>
    );
}