Vue.component('seccion-inicio', {
    created(){
        console.log("hello created");
        //this.url = "/correoelectronico"
    },
    template: `
    <section id="inicio">
    <div class="row mt-2">
        <div class="col-md-12">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="assets/image/asesoria22.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-md-block" id="metodologia">
                        <p style=" color: black; font-weight: bolder;"><mark>&nbsp; Metodología de nuestro servicio. &nbsp; <mark></p>
                        <p id="meto" style="color: black; font-weight: bolder; font-style: italic;"><mark>&nbsp; Una primera visita para conocer a la entidad y sus &nbsp; <br> &nbsp;  necesidades. &nbsp;</mark></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="assets/image/asesoria33.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-md-block" id="metodologia">
                        <p style=" color: black; font-weight: bolder;"><mark>&nbsp; Metodología de nuestro servicio. &nbsp; <mark></p>
                        <p id="meto" style="color: black; font-weight: bolder; font-style: italic;"><mark>&nbsp; Una segunda visita para planear el trabajo, &nbsp;  <br> &nbsp; determinar riesgos y  desarrollar el plan de Asesoría y &nbsp;  <br> &nbsp;  seguimiento.  &nbsp;</mark></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="assets/image/asesoria44.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-md-block" id="metodologia">
                        <p style=" color: black; font-weight: bolder;"><mark>&nbsp; Metodología de nuestro servicio. &nbsp; <mark></p>
                        <p id="meto" style="color: black; font-weight: bolder; font-style: italic;"><mark>&nbsp; Un número de visitas mensuales,<br> &nbsp; para realizar revisión, seguimiento y demás &nbsp;  <br> &nbsp;  actividades que involucren el proceso contratado.  &nbsp;</mark></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="assets/image/asesoria55.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-md-block" id="metodologia">
                        <p style=" color: black; font-weight: bolder;"><mark>&nbsp; Metodología de nuestro trabajo. &nbsp; <mark></p>
                        <p id="meto" style="color: black; font-weight: bolder; font-style: italic;"><mark>&nbsp;  <strong>:-></strong> Planeación preliminar &nbsp; <br> &nbsp; <br> &nbsp; <strong>:-></strong> Desarrollo del ambiente de asesoría &nbsp;</mark></p>
                    </div>
                </div>                       
                <div class="carousel-item">
                    <img src="assets/image/asesoria66.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-md-block" id="metodologia">
                        <p id="meto" style="color: black; font-weight: bolder;  font-style: italic;"><mark>&nbsp; Planeación preliminar. &nbsp;</mark></p>
                        <p id="meto" style="color: black; font-weight: bolder;  font-style: italic;"><mark>&nbsp; Comprensión del negocio, del ambiente de control y del proceso contable.&nbsp;  <br>  &nbsp; Realización de procedimientos analíticos preliminares. &nbsp;</mark></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="assets/image/asesoria77.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-md-block" id="metodologia">
                        <p id="meto" style="color: black; font-weight: bolder;  font-style: italic;"><mark>&nbsp; Desarrollar ambiente de asesoría. &nbsp;</mark></p>
                        <p id="meto" style="color: black; font-weight: bolder;  font-style: italic;"><mark>&nbsp; Conciencia y actos de los directivos y la administración &nbsp;  <br>  &nbsp; respecto de la importancia del control interno de la &nbsp;  <br> &nbsp; entidad . &nbsp;</mark></p>
                    </div>
                </div>
                
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span style="color: black"class="carousel-control-prev-icon" aria-hidden="true"><i class="fas fa-chevron-left fa-2x"></i></span>
                <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span style="color: black" class="carousel-control-next-icon" aria-hidden="true"><i class="fas fa-chevron-right fa-2x"></i></span>
                <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
    </section>

    
    `
})