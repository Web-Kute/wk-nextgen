<?php
session_start();

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

$msg = '';
if (array_key_exists('email', $_POST)) {
    require 'vendor/autoload.php';
    $mail = new PHPMailer;
    $mail->isSMTP();
    $mail->Host = 'smtp.hostinger.com';
    $mail->Port = 587;
    $mail->SMTPDebug = 0;
    $mail->SMTPAuth = true;
    $mail->Username = 'denis.godec@weekub.fr';
    $mail->Password = 'a3z4Ye8c#skQf8A&';
    $mail->setFrom('denis.godec@weekub.fr', $_POST['name']);
    $mail->addAddress('denis.godec@weekub.fr', 'Receiver Name');
    if ($mail->addReplyTo($_POST['email'], $_POST['name'])) {
        $mail->Subject = 'PHPMailer contact form';
        $mail->isHTML(false);
        $mail->Body = <<<EOT
        Email: {$_POST['email']}
        Name: {$_POST['name']}
        Message: {$_POST['message']}
        EOT;
        if (!$mail->send()) {
            $msg = 'Sorry, something went wrong. Please try again later.';
        } else {
            $msg = 'Message sent! Thanks for contacting us.';
        }
    } else {
        $msg = 'Share it with us!';
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon.ico">
    <title>Intégrateur HTML, CSS, JavaScript / WordPress - Développeur front-end</title>
    <meta name="description" content="Denis Godec, Intégrateur HTML / CSS / JavaScript / WordPress Freelance, situé en région parisienne.">
    <meta name="keywords" content="freelance, indépendant, intégrateur HTML, CSS, JavaScript, html5, webdesign, figma, design system, photoshop, visual studio code, rgaa, accessibilité, site web, site internet, front-end, less, sass, gulp, bootstrap, WordPress, Adobe XD">
    <meta name="author" content="Denis Godec">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no">
    <link rel="stylesheet" href="assets/css/styles.min.css">
</head>

<body>
    <form action="<?php echo htmlentities($_SERVER['PHP_SELF']) ?>" method="POST" accept-charset="UTF-8" class="contact__form">
        <fieldset>
            <div class="form__user">
                <div>
                    <label for="name">Nom</label>
                    <input type="text" name="name" id="name" value="" autocomplete="on" placeholder="Nom complet" required minlength="4" maxlength="25" pattern="^[A-zÀ-ÿ ]*$">
                </div>
                <div>
                    <label for="email">E-mail</label>
                    <input type="email" name="email" id="email" value="" autocomplete="on" placeholder="E-mail" required minlength="6" maxlength="25" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$">
                </div>
            </div>
            <div class="form__message">
                <label for="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10" required minlength="60" maxlength="350"></textarea>
            </div>
            <input type="hidden" name="token" value="<?php echo $token; ?>" />
            <input type="submit" name="submit" id="submit" value="Envoyer" />
        </fieldset>
    </form>
    <div class="response"><?php echo htmlentities($msg) ?></div>
</body>

</html>