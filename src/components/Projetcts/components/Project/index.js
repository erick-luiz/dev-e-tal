import React from 'react'


function Project(props) {

    let img = props.img;
    let project = props.project;

    return (<li className="feature-item">
        <div className="left-icon">
            <img src={img.src} alt={img.alt} />
        </div>
        <div className="right-content">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <a href={project.link} className="text-button">Saiba Mais</a>
        </div>
        </li>);
}

export default Project;
