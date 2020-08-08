import React from 'react'
import Project from './components/Project';

function Projects(props) {

    let projects = props.projects || [];

    return <section className="section" id="features">
<div className="container">
    <div className="row">
        <div className="col-lg-6 offset-lg-3">
            <div className="section-heading">
                <h2>Nossos <em> Projetos </em></h2>
                <img src="../assets/images/line-dec.png" alt="waves" />
                <p>Projetos da equipe DevTal. </p>
            </div>
        </div>
        <div className="col-lg-6">
            <ul className="features-items">
                {projects.filter((p,i) => i%2 === 0).map((p, idx) => <Project key={`id_${idx}`} {...p} />)}
            </ul>
        </div>
        <div className="col-lg-6">
            <ul className="features-items">
                {projects.filter((p,i) => i%2 === 1).map((p, idx) => <Project key={`id_${idx}`} {...p} />)}
            </ul>
        </div>
    </div>
</div>
</section>;
}

export default Projects;