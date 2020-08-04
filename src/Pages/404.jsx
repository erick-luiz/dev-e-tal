import React from 'react'
import MainBanner from '../components/MainBanner'
import Page from './Page';

export default () => {

    return (
        <Page>
            <MainBanner 
                img="./assets/images/404.jpeg"
                link={{title:"Ver nossos projetos", path:"/projetos"}}
                subtitle="Não encotramos a página!"
            />
        </Page>
    );
}