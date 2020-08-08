import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './style.css';

export default (props) => {

    let menus = [
        {name: "inicio", path:"/inicio", active: props.inicio},
        {name: "Ferramentas", path:"/tools", active: props.tools},
    
    ]

    let [active, setActive] = useState('active');
    
    let setNav = _ => {
        if(active === 'active') 
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
                        
                        <Link to="/" className="logo">Dev<em> Tal</em></Link>

                        <ul className="nav">
                            {menus.map((menu, number) => {
                                return (<li key={`id_${number}`}><Link to={menu.path} className={menu.active?"active":""}>{menu.name}</Link></li>)
                            })}
                            <li></li>
                        </ul>        
                        <Link to="/" onClick={setNav} active={active} className='menu-trigger'>
                            <span>Menu</span>
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    );
}