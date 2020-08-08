import React from 'react';
import Page from '../Page';
import TodoList from '../../components/TodoList';

function Tools() {

let title = "Lista de Tarefas";
let description = "Aqui você consegue cadastrar tarefas do dia a dia e gerar o relatório sobre o seu desempenho diario.";

return (
    <Page>
<section className="section" id="our-classes">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 offset-lg-3">
                <div className="section-heading">
                    <h2>Nossas Ferramentas</h2>
                    <img src="../assets/images/line-dec.png" alt="" />
                    <p>Esta Página contém as ferramnentas que disponibilizamos no projeto</p>
                </div>
            </div>
        </div>
        <div className="row" id="tabs">
          <div className="col-lg-4">
            <ul>
              <li><a href='#tabs-1'><img src="assets/images/tabs-first-icon.png" alt=""/>Lista de tarefas</a></li>
            </ul>
          </div>
          <div className="col-lg-8">
            <section className='tabs-content'>

              {/* Extrair para tool */}
              <article id='tabs-1'>
                <h4>{title as string}</h4>
                <p>{description as string}</p>
                <TodoList />
              </article>
            </section>
          </div>
        </div>
    </div>
</section>
</Page>
);

}

export default Tools;