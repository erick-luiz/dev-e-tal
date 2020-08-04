import React from 'react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

export default ({ children }) => {

    return (
        <>
            <Menu />
            { children }
            <Footer />
        </>
    );
}