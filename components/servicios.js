Vue.component('seccion-servicios', {
    template: `
    <section id="servicios">
            <div class="mt-5">
                <h3 class="text-center">Nuestros Servicios</h3>
                <span style="bottom: 40%; display: flex;height: 2px; left: 0; margin-bottom: 2%; margin: 0 auto; position: initial; right: 50; width: 20%; background-color: #3E4095;"></span>
            </div>
            <div class="row"> 
                <div class="col" style="margin-top:5%; color: black">
                    <ul class="nav nav-tabs justify-content-center" >
                        <li class="nav-item active" >
                            <button class="nav-link active" id="diagnostico-tab" data-bs-toggle="tab" data-bs-target="#diagnostico" type="button" role="tab" aria-controls="diagnostico" aria-selected="true"><span style="font-style: italic; font-weight: bold; "><i class="fa fa-pen-square"></i> Diagnóstico y Valoración</span></button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link" id="asesorias-tab" data-bs-toggle="tab" data-bs-target="#asesorias" type="button" role="tab" aria-controls="asesorias" aria-selected="false"><span style="font-style: italic; font-weight: bold;"><i class="fas fa-user"></i> Asesorias</span></button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link" id="implementacion-tab" data-bs-toggle="tab" data-bs-target="#implementacion" type="button" role="tab" aria-controls="implementacion" aria-selected="false"><span style="font-style: italic; font-weight: bold;"><i class="fas fa-wrench"></i> Implementación y adaptación</span></button>
                        </li>
                    </ul>

                    <div class="tab-content border" id="myTabContent" style="padding:5%">
                        <div class="tab-pane fade show active" role="tabpanel" id="diagnostico" aria-labelledby="diagnostico-tab">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5 class="text-center">Diagnostico Empresarial</h5>
                                    <span style="bottom: 40%; display: flex;height: 2px; left: 0; margin-bottom: 2%; margin: 0 auto; position: initial; right: 50; width: 5%; background-color: #3E4095;"></span>
                                    <p class="mt-4" style="text-align: center; font-style: italic;">Analizamos la situación desde diferentes perspectivas: </p>
                                    <div class="justify-content-center d-flex" style="border-radius:10%">
                                        <img src="assets/image/diag1.png" class="img-fluid" style="border-radius:10%" width="60%">
                                    </div>
                                    <p class="mt-4" style="text-align: center; font-style: italic;">El estudio se lo realiza de manera integral y/o específica dependiendo de las necesidades del cliente; desarrollándose en cuatro procesos:</p>
                                    <div class="justify-content-center d-flex" style=" border-radius:10%">
                                        <img src="assets/image/imagen2.png" class="img-fluid" style="border-radius:10%">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <h5 class="text-center">Valoración de Empresa</h5>
                                    <span style="bottom: 40%; display: flex;height: 2px; left: 0; margin-bottom: 2%; margin: 0 auto; position: initial; right: 50; width: 5%; background-color: #3E4095;"></span>
                                    <p class="mt-4" style="text-align: justify; font-style: italic;">Para la Alta Gerencia dentro de las organizaciones es imprescindible conocer el valor de negociación de la misma, para dar solución a esta necesidad, <strong> AGE Asesorías y Consultorías S.A.S.</strong>, presenta un modelo de valoración usado para calcular un rango de valores entre los cuales se encuentra el precio de la empresa, permitiendo evaluar de los resultados de la empresa. </p>
                                </div>
                            </div>
                            <div class="row mt-5">
                                <div class="col-md-6">
                                    <h5 class="text-center">Análisis situacional y logístico empresarial</h5>
                                    <span style="bottom: 40%; display: flex;height: 2px; left: 0; margin-bottom: 2%; margin: 0 auto; position: initial; right: 50; width: 5%; background-color: #3E4095;"></span>
                                    <p class="mt-4" style="text-align: justify; font-style: italic;"><strong>AGE Asesorías y Consultorías S.A.S.</strong>, a través de análisis situacional, estudia el entorno en que se desenvuelve la organización en un determinado momento, tomando en cuenta los factores internos y externos, influyendo en cómo se proyecta la organización en su medio.  Para el desarrollo del análisis situacional se evalúan los siguientes escenarios de acción: </p>
                                    <p class="mt-4" style="text-align: justify; font-style: italic;"> Macroambiente o entorno general. </p>
                                    <div class="justify-content-center d-flex" style=" border-radius:10%">
                                        <img src="assets/image/macroambiente.png" class="img-fluid" style="border-radius:10%">
                                    </div>
                                    <p class="mt-4" style="text-align: justify; font-style: italic;"> Microambiente o entorno especifico. </p>
                                    <div class="justify-content-center d-flex" style=" border-radius:10%">
                                        <img src="assets/image/microambiente.png" class="img-fluid" style="border-radius:10%">
                                    </div>
                                    <p class="mt-4" style="text-align: justify; font-style: italic;">Ambiente interno.</p>
                                    <div class="justify-content-center d-flex" style=" border-radius:10%">
                                        <img src="assets/image/macroambiente.png" class="img-fluid" style="border-radius:10%">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <h5 class="text-center">Auditoría externa e integral</h5>
                                    <span style="bottom: 40%; display: flex;height: 2px; left: 0; margin-bottom: 2%; margin: 0 auto; position: initial; right: 50; width: 5%; background-color: #3E4095;"></span>
                                    <p class="mt-4" style="text-align: justify; font-style: italic;">En <strong>AGE Asesorías y Consultorías S.A.S.</strong>, para el servicio de auditoría externa integral, el pronunciamiento No.7 del Consejo Técnico de la Contaduría Pública, el cual describe las cuatro auditorias que componen la auditoria integral, en las que se encuentran, Auditoria Financiera, de Cumplimiento, de Gestión, de Control Interno y Gestión de Riesgos.</p>
                                </div>
                            </div>                            
                        </div> 

                        <div class="tab-pane fade show" role="tabpanel" id="asesorias" aria-labelledby="asesorias-tab">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5 class="text-center">Asesoría contable y financiera</h5>
                                    <span style="bottom: 40%; display: flex;height: 2px; left: 0; margin-bottom: 2%; margin: 0 auto; position: initial; right: 50; width: 5%; background-color: #3E4095;"></span>
                                    <p class="mt-4" style="text-align: justify; font-style: italic;">
                                       <strong>AGE Asesorías y Consultorías S.A.S.</strong>, ofrece asesoramiento contable y financiero permanente, permitiendo un análisis de la información económica en tiempo real que ayuda a la mejor decisión la alta gerencia de la organización.  <br>
                                        La asesoría contable y financiera involucra: 
                                    </p>
                                    <p style="text-align: justify; font-style: italic;">
                                        <strong>:-></strong> Análisis e interpretación de balances. <br>
                                        <strong>:-></strong> Supervisión de la contabilidad y cierre de ejercicio económico. <br>
                                        <strong>:-></strong> Análisis de inversiones, sus posibles alternativas y efectos. <br>
                                        <strong>:-></strong> Diseño, elaboración y seguimiento del plan de negocio. <br>
                                    </p>
                                    <p style="text-align: justify; font-style: italic;">  
                                        El servicio de asesoramiento contable ofrece la posibilidad de asumir la función de Departamento de Contabilidad Externo para la empresa y servir de herramienta de decisión al empresario.  La externalización de este servicio permitirá un ahorro en costes para la empresa y una mayor eficiencia en su confección.
                                    </p>
                                </div>
                                <div class="col-md-6">
                                    <div class="row">
                                        <h5 class="text-center">Asesoría fiscal y tributaria</h5>
                                        <span style="bottom: 40%; display: flex;height: 2px; left: 0; margin-bottom: 2%; margin: 0 auto; position: initial; right: 50; width: 5%; background-color: #3E4095;"></span>
                                        <p class="mt-4" style="text-align: justify; font-style: italic;">
                                           <strong> AGE Asesorías y Consultorías S.A.S. </strong>, cuenta con profesionales especializados en cuestiones tributarias, gestionan el cumplimiento de obligaciones fiscales y tributarias directas e indirectas; asegurando la presentación de los reportes completos, en los plazos establecidos.
                                        </p>
                                    </div>
                                    <div class="row mt-3">
                                        <h5 class="text-center">Asesoría pensional</h5>
                                        <span style="bottom: 40%; display: flex;height: 2px; left: 0; margin-bottom: 2%; margin: 0 auto; position: initial; right: 50; width: 5%; background-color: #3E4095;"></span>
                                        <p class="mt-4" style="text-align: justify; font-style: italic;">
                                          <strong>AGE Asesorías y Consultorías S.A.S.</strong> , a través de sus profesionales gestiona y asesora los trámites de la pensión personal, revisando la retroactividad o los intereses, bono pensional y la liquidación o reliquidación en caso de necesitarlo.  
                                        </p>
                                    </div>
                                   
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12">
                                    <h5 class="text-center">Capacitaciones personalizadas</h5>
                                    <span style="bottom: 40%; display: flex;height: 2px; left: 0; margin-bottom: 2%; margin: 0 auto; position: initial; right: 50; width: 5%; background-color: #3E4095;"></span>
                                    <p class="mt-4" style="text-align: justify; font-style: italic;">En <strong>AGE Asesorías y Consultorías S.A.S.</strong>,con el apoyo de los profesionales que conforman la firma, brindamos capacitaciones personalizadas, para apoyar a las empresas en sus cambios de personal o crecimiento organizacional.</p>
                                </div>
                            </div>                            
                        </div> 

                        <div class="tab-pane fade show" role="tabpanel" id="implementacion" aria-labelledby="implementacion-tab">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5 class="text-center">Optimización de procesos administrativos</h5>
                                    <span style="bottom: 40%; display: flex;height: 2px; left: 0; margin-bottom: 2%; margin: 0 auto; position: initial; right: 50; width: 5%; background-color: #3E4095;"></span>
                                    <p class="mt-4" style="text-align: justify; font-style: italic;">
                                        Los procesos administrativos dentro de las organizaciones son el cimiento esencial para el desarrollo del objeto social empresarial,<strong> AGE Asesorías y Consultorías S.A.S.</strong>, brinda el apoyo para optimizar los procesos lo cual retribuya en la toma oportuna de decisiones gerenciales.
                                    </p>
                                    <p style="text-align: justify; font-style: italic;">
                                        Para las empresas, organizaciones, agrupaciones nuevas, <strong>AGE Asesorías y Consultorías S.A.S.</strong>, brinda el servicio de direccionamiento administrativo, el cual contempla: diseño y elaboración de: misión, visión, valores, principios, organigrama, mapa de procesos, y manual de funciones y competencias.
                                    </p>
                                </div>
                                <div class="col-md-6">
                                    <h5 class="text-center">Implementación de NIAS</h5>
                                    <span style="bottom: 40%; display: flex;height: 2px; left: 0; margin-bottom: 2%; margin: 0 auto; position: initial; right: 50; width: 5%; background-color: #3E4095;"></span>
                                    <p class="mt-4" style="text-align: justify; font-style: italic;">
                                        Las Normas Internaciones de Auditoria llegaron a Colombia para quedarse e implementarse a partir del año 2016. <strong> AGE Asesorías y Consultorías S.A.S.</strong>, brinda la mejor forma para hacer las cosas y como presentar la información financiera de acuerdo a las NIAS; a través de un proceso de implementación que incluye:
                                    </p>
                                    <div class="row">
                                        <div class="col">
                                            <p style="text-align: justify; font-style: italic;">
                                                <strong>:-></strong> Materialidad.<br>
                                                <strong>:-></strong> Aplicación de las NIA en firmas pequeñas y medianas.<br>
                                                <strong>:-></strong> Concepto de fraude.<br>
                                                <strong>:-></strong> Uso del trabajo de expertos.<br>
                                                <strong>:-></strong> Auditoria del Control Interno.<br>  
                                            </p>
                                        </div>
                                        <div class="col">
                                            <p style="text-align: justify; font-style: italic;">
                                            <strong>:-></strong> Entender el sistema. <br>
                                            <strong>:-></strong> Desarrollar conocimiento.<br>
                                            <strong>:-></strong> Hacer una auditoria basada en riesgos. <br>
                                            <strong>:-></strong> Adecuada supervisión.<br>
                                            <strong>:-></strong> Independencia. 
                                            </p>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6">
                                    <h5 class="text-center">Adaptación y diagnostico, implementación y seguimiento de NIIF</h5>
                                    <span style="bottom: 40%; display: flex;height: 2px; left: 0; margin-bottom: 2%; margin: 0 auto; position: initial; right: 50; width: 5%; background-color: #3E4095;"></span>
                                    <p class="mt-4" style="text-align: justify; font-style: italic;">
                                        De acuerdo a las necesidades propias de cada organización,<strong>AGE Asesorías y Consultorías S.A.S.</strong> , orienta la implementación de las Normas Internaciones de Información Financiera (NIIF), sujeta a la normatividad colombiana estableciendo un cronograma de trabajo previo que permita el desarrollo de las etapas de adaptación y diagnostico, implementación y seguimiento
                                    </p>
                                </div>
                                <div class="col-md-6">
                                    <h5 class="text-center">Implementación de software</h5>
                                    <span style="bottom: 40%; display: flex;height: 2px; left: 0; margin-bottom: 2%; margin: 0 auto; position: initial; right: 50; width: 5%; background-color: #3E4095;"></span>
                                    <p class="mt-4" style="text-align: justify; font-style: italic;">
                                       <strong> AGE </strong> y sus alianzas estratégicas en el apoyo tecnológico, permite presentar a los usuarios paquetes de software administrativos y contables adecuados a las necesidades de las empresas contratantes.
                                    </p>                                    
                                </div>
                            </div>                            
                        </div> 
                    </div> 
                </div>
            </div>
        </section>
    `
})