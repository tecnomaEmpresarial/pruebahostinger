Vue.component('seccion-contacto', {
    template: ` 
<div style="background-color: #F1F1F1;">
    <section class="container">
        <div class="row">
            <h3 class="text-center mt-4">Contacto</h3>
            <span style="bottom: 40%; display: flex;height: 2px; left: 0; margin-bottom: 2%; margin: 0 auto; position: initial; right: 50; width: 20%; background-color:#3E4095;"></span>
        </div>
        <div class="row">
            <div class="col-md-6 mt-5">
                <form action="components/correo.php" method="POST" class=" mt-4 ">
                    <div class="input-group mb-3">
                        <span class="input-group-text" style="background-color:#3E4095; color: white"><i class="fas fa-user fa-2x"></i></span>
                        <input type="text" class="form-control" placeholder="Nombre completo" style="font-style:italic;" name="txt_nombre">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" style="background-color:#3E4095; color: white"><i class="fas fa-at fa-2x"></i></span>
                        <input type="text" class="form-control" placeholder="Correo electrónico" style="font-style:italic;" name="txt_correo">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" style="background-color:#3E4095; color: white"><i class="fas fa-key fa-2x"></i></span>
                        <input type="password" class="form-control" placeholder="Contraseña" style="font-style:italic;" name="txt_clave">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" style="background-color:#3E4095; color: white"><i class="fas fa-envelope-open-text fa-2x"></i></span>
                        <input type="text" class="form-control" placeholder="Asunto" style="font-style:italic;" name="txt_asunto">
                    </div>
                    <div class="form-floating">
                        <textarea class="form-control" id="floatingTextarea" style="height: 200px" name="txt_mensaje"></textarea>
                        <label for="floatingTextarea" style="font-style:italic;">Ingrese su comentario</label>
                    </div>
                    <button type="submit" name="btn_enviar" class="btn btn-lg mt-3 mb-5" style="background-color: #3E4095;color: white">Enviar </button>
                </form>
            </div>
            <div class="col" style="margin-top: 6%;">
                <div style="width: 100%; margin-bottom: 10%" >
                    <iframe width="100%" class="card" style="border-color: #3E4095;" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Zarzamora,%20Bogot%C3%A1,%20D.C.,%20Colombia,%20Calle%2071%20B%20No.%2087-12+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/car-satnav-gps/">Car Navigation Systems</a></iframe></div>
                </div>
            </div>
        </div>
    </section>
</div>    `
})