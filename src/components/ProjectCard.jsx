import React from 'react'

export default (props) =>{
    
    let link = props.link || {};
    let card = props.card || {};
    let img = props.img || {};

    return (<li className="feature-item">
        <div className="left-icon">
            <img src={img.path} alt={img.alt} />
        </div>
        <div className="right-content">
            <h4>{card.title}</h4>
            <p>{card.content}</p>
            <Link to={link.to} className="text-button">{link.title}</Link>
        </div>
    </li>);

}