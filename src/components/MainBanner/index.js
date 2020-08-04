import React from 'react'
import {Link} from 'react-router-dom'
import './banner.css'


export default (props) => {

    let link = props.link || {};

    let linkBtn = (link) => {
        if(link.path && link.title) {
            return <a href={link.path}>{link.title}</a>
        }
        return false;
    }

    let title = (link) => {
        if(title.p1) {
            return <h2>{title.p1}<em>{title.p1}</em></h2>
        }
        return <h2>Dev&lt;<span>&amp;</span><em>&gt;Tal</em></h2>;
    }

return (<div className="main-banner" id="top">
    <div id="bg-img">
        <img src={props.img} />
    </div>

    <div className="img-overlay header-text">
        <div className="caption">
            <h6>{props.subtitle}</h6>
            {title(props.title)}
            <div className="main-button scroll-to-section">
                {linkBtn(link)}
            </div>
        </div>
    </div>
</div>);
}