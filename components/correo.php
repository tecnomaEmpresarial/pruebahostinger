<?php

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
    header('Content-Type: text/html; charset=utf-8');

    require  '../assets/library/PHPMailer/Exception.php' ;
    require  '../assets/library/PHPMailer/PHPMailer.php' ;
    require  '../assets/library/PHPMailer/SMTP.php' ;

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    if(isset($_POST['btn_enviar']))
    {
        $nombre = $_REQUEST['txt_nombre'];
        $email = $_REQUEST['txt_correo']; 
        $asunto = $_REQUEST['txt_asunto'];
        $mensaje = $_REQUEST['txt_mensaje'];  

        $mail = new PHPMailer(true);
        try { 
            //Configuraciones servidor SMTP 
            $mail->SMTPDebug = 0;                      
            $mail->isSMTP();                                          
            $mail->Host       = 'smtp.gmail.com';                     
            $mail->SMTPAuth   = true;                                   
            $mail->Username   = 'CORREO EMPRESA';                    
            $mail->Password   = 'CLAVE CORREO EMPRESA';                               
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
            $mail->Port       = 465;                               

            //Receptor
            $mail->setFrom('CORREO EMPRESA', 'NOMBRE USUARIO CORREO EMPRESA');
            $mail->addAddress($email, $nombre);

            //Contenido
            $mail->isHTML(true);
            $mail->Subject = $asunto;
            $mail->Body  =  $mensaje;
            $mail->send();

            echo 'Mensaje ha sido enviado';
        } catch (Exception $e) {
            echo "Mensaje no pudo ser enviado. Mailer Error: {$mail->ErrorInfo}";
        }
    }
?>


