import React from 'react'
import '../css/card.css'

export default props => <div className="col-lg-4">
<div className="trainer-item">
    <div className="image-thumb">
        <img src={props.img} alt="" />
    </div>
    <div className="down-content">
        <span>{props.impact}</span>
        <h4>{props.title}</h4>
        <p>{props.content}</p>
        <ul className="social-icons">
            <li><a href={props.link}>Assista</a></li>
        </ul>
    </div>
</div>
</div>