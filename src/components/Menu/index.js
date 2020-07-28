import React, {useState} from 'react'
import {Link} from 'react-router-dom';

export default (props) => {

    //{name: "contato", path:"/contato", active: props.contato},
    //{name: "projetos", path:"/projetos", active: props.projetos},
    //{name: "graph", path:"/graph", active: props.graph},

    let menus = [
        {name: "inicio", path:"/inicio", active: props.inicio}
    ]

    let [active, setActive] = useState('active');
    
    let setNav = _ => {
        if(active == 'active') 
            setActive('');
        else 
            setActive('active');
    }

    return (
    <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                        
                        <a href="index.html" className="logo">Dev<em> Tal</em></a>

                        <ul className="nav">
                            {menus.map(menu => {
                                return (<li><Link to={menu.path} className={menu.active?"active":""}>{menu.name}</Link></li>)
                            })}
                            <li></li>
                        </ul>        
                        <a onClick={setNav} active={active} className='menu-trigger'>
                            <span>Menu</span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    );
}