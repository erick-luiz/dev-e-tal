import React from 'react'
import MainBanner from '../components/MainBanner'
import SectionFectures from '../components/ProjectsSections'
import SectionCallToAction from '../components/SectionCallToAction'
import SectionOurClasses from '../components/SectionOurClasses'
import Schedule from '../components/Schedule'
import Cards from '../components/Cards'
import Contact from '../components/Contact'

export default () => {

    return (
        <React.Fragment>
            <MainBanner 
                link={{title:"youtube", path:"/youtube"}}
                subtitle="Skinin the game!" />
            <SectionFectures />
            <SectionCallToAction />
            <SectionOurClasses />
            <Schedule /> 
            <Cards t1="Dicas" t2="Rápidas" description="Série de videos que mostram algumas dicas simples sobre o desenvolvimento Java." />
            <Contact />
            <footer />
        </React.Fragment>
    );
}