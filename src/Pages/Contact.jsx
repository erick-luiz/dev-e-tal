import React from 'react'
import MainBanner from './MainBanner'
import Header from './Header'
import SectionFectures from './SectionFectures'
import SectionCallToAction from './SectionCallToAction'
import SectionOurClasses from './SectionOurClasses'
import Schedule from './Schedule'
import Cards from './Cards'
import Contact from './Contact'

export default () => {

    return (
        <React.Fragment>
            <MainBanner />
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