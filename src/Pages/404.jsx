import React from 'react'
import MainBanner from '../components/MainBanner'
import Footer from '../components/Footer'

export default () => {

    return (
        <React.Fragment>
            <MainBanner 
                img="./assets/images/404.jpeg"
                link={{title:"Ver nossos projetos", path:"/projetos"}}
                subtitle="Não encotramos a página!"
            />
            <Footer />
        </React.Fragment>
    );
}