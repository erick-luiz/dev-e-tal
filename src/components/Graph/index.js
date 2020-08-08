import React from 'react';
import Field from './components/Field'

export default () => {

    return (<>
      <section className="section" id="contact-us">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12">
              <div className="contact-form">
                <form id="contact" action="" method="post">
                  <div className="row">
                    
                    <legend>Pessoas</legend>
                    <Field name="email" label="Colaboração e comunicação" type="text" onChange={() => console.log("mudou")} value={0} />
                    <Field name="email" label="Motivação e confiança" type="text" onChange={() => console.log("mudou")} value={0} />
                    <Field name="email" label="Autonomia e auto-organização" type="text" onChange={() => console.log("mudou")} value={0} />
                    <Field name="email" label="Kaizen" type="text" onChange={() => console.log("mudou")} value={0} />
                    <Field name="email" label="Interdisciplinaridade" type="text" onChange={() => console.log("mudou")} value={0} />

                    <legend>Experimente</legend>
                    <Field name="email" label="Práticas Lean-Agile" type="text" onChange={() => console.log("mudou")} value={0} />
                    <Field name="email" label="Métricas e ferramentas" type="text" onChange={() => console.log("mudou")} value={0} />
                    <Field name="email" label="Comprometimento com o produto" type="text" onChange={() => console.log("mudou")} value={0} />
                    <Field name="email" label="Compartilhamento de conhecimento" type="text" onChange={() => console.log("mudou")} value={0} />
                    <Field name="email" label="Ritmo das entregas" type="text" onChange={() => console.log("mudou")} value={0} />
                    
                    <legend>Segurança</legend>
                    <Field name="email" label="Código sustentável" type="text" onChange={() => console.log("mudou")} value={0} />
                    <Field name="email" label="Automações (Pipeline)" type="text" onChange={() => console.log("mudou")} value={0} />
                    <Field name="email" label="BDD/TDD e Clean Code" type="text" onChange={() => console.log("mudou")} value={0} />
                    <Field name="email" label="Qualidade E2E" type="text" onChange={() => console.log("mudou")} value={0} />
                    <Field name="email" label="DevOps" type="text" onChange={() => console.log("mudou")} value={0} />
                    
                    

                    <div className="col-lg-12">
                      <fieldset>
                        <button type="submit" id="form-submit" className="main-button">Send Message</button>
                      </fieldset>
                    </div>
                  </div>
                </form>
            </div>
        </div>
    </div>
</div>
</section>
      
      
      
      
      
      
      
      
      
      
      <div class="editor">
      
        <form id="graph-editor" action="/action_page.php">		
          <table>
            <tr>
              <td>Time</td>
              <td><input type="text" name="time" /></td>
            </tr>
            <tr>
              <td>Data</td>
              <td><input type="date" name="date" /></td>
            </tr>
            <tr colspan="2">
              <th>Pessoas</th>
            </tr>
            

              
            <tr colspan="2">
              <th>Valor</th>
            </tr>
            <tr>
              <td>Quebra de Stories, Features e Epics</td>
              <td><input type="number" name="15" min="1" max="5" value="1" /></td>
            </tr>
            <tr>
              <td>UX</td>
              <td><input type="number" name="16" min="1" max="5" value="1" /></td>
            </tr>
            <tr>
              <td>Entrega de valor</td>
              <td><input type="number" name="17" min="1" max="5" value="1" /></td>
            </tr>
            <tr>
              <td>Relacionamento com negócio</td>
              <td><input type="number" name="18" min="1" max="5" value="1" /></td>
            </tr>
            <tr>
              <td>Satisfação do cliente</td>
              <td><input type="number" name="19" min="1" max="5" value="1" /></td>
            </tr>
          </table>
      </form>
    </div>
    <br />
    <canvas id="canvas-show" width="800" ></canvas>
    <canvas id="canvas-out" width="1400" hidden="true"></canvas>
    {/*<a href="#" id="salvar" class="btn-salvar linkbotao" >Gerar Imagem</a>*/}
    </>
    );
}