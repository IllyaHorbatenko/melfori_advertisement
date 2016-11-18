<?php
if ($_POST) {            
            $name = ($_POST["name"]);
            $phone = ($_POST["phone"]);
            $email = ($_POST["email"]);
            $form_name = ($_POST["form_name"]);   

         
		$json = array(); // подготовим массив ответа
            if(isset($_POST['id_form'])) {
                  $id_form = $_POST['id_form'];
                  $json['form'] = $id_form;
            }
            
        
            $to = 'orionpro79@gmail.com'; //обратите внимание на запятую      

        
            /* тема/subject */
            $subject = "Заявка с сайта Название сайта";
            
            /* сообщение */
            $message .= '<div>Из формы: '.$form_name.'</div>';  //из какой формы (берём из скрытого инпута поле name="form_name").
            $message .= '<div>Имя: '.$name.'</div>';
            $message .= '<div>Телефон: '.$phone.'</div>';
            $message .= '<div>Email: '.$email.'</div>';
            /* Для отправки HTML-почты вы можете установить шапку Content-type. */
            $headers= "MIME-Version: 1.0\r\n";
            $headers .= "Content-type: text/html; charset=utf-8\r\n";
            $headers .= 'From: Название сайта' . "\r\n"; /* отправляет ОТ КОГО */
            /* и теперь отправим из */
            mail($to, $subject, $message, $headers);
            $json['error'] = 0; // ошибок не было

		echo json_encode($json); // выводим массив ответа
}
?>