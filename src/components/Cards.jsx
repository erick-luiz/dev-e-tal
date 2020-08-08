import React from 'react'
import Card from './Card';

export default (props) => {
    let {t1, t2, description} = props;
    let videos = props.videos || [];
    return (
        <section className="section" id="trainers">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-heading">
                        <h2>{t1} <em>{t2}</em></h2>
                        <img src="../assets/images/line-dec.png" alt="" />
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            <div className="row">
                { videos.map((v,idx) => <Card key={`id_${idx}`} {...v} />) }
            </div>
            <br />
        </div>
    </section>

    );
}