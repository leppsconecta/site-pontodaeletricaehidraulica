
<?php
// Set headers to allow cross-origin requests (CORS)
header("Access-Control-Allow-Origin: *"); // Update this with your actual domain in production
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Check if it's a POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $name = isset($_POST['name']) ? $_POST['name'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $phone = isset($_POST['phone']) ? $_POST['phone'] : '';
    $neighborhood = isset($_POST['neighborhood']) ? $_POST['neighborhood'] : '';
    $city = isset($_POST['city']) ? $_POST['city'] : '';
    $area = isset($_POST['area']) ? $_POST['area'] : '';
    $otherArea = isset($_POST['otherArea']) ? $_POST['otherArea'] : '';
    $experience = isset($_POST['experience']) ? $_POST['experience'] : '';

    // Email configuration
    $to = "seu-email@seudominio.com"; // Replace with your actual email
    $subject = "Nova candidatura: $name";

    // Handle file upload
    $resume_path = '';
    $has_attachment = false;
    
    if (isset($_FILES['resume']) && $_FILES['resume']['error'] === UPLOAD_ERR_OK) {
        $tmp_name = $_FILES['resume']['tmp_name'];
        $name_file = $_FILES['resume']['name'];
        $resume_path = "uploads/" . basename($name_file);
        
        // Create uploads directory if it doesn't exist
        if (!file_exists('uploads')) {
            mkdir('uploads', 0777, true);
        }
        
        // Move uploaded file
        if (move_uploaded_file($tmp_name, $resume_path)) {
            $has_attachment = true;
        }
    }

    // Prepare email body
    $message = "
    <html>
    <head>
        <title>Nova candidatura recebida</title>
    </head>
    <body>
        <h2>Detalhes do Candidato:</h2>
        <p><strong>Nome:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Telefone:</strong> $phone</p>
        <p><strong>Bairro:</strong> $neighborhood</p>
        <p><strong>Cidade:</strong> $city</p>
        <p><strong>Área de Interesse:</strong> " . ($area == 'outro' ? $otherArea : $area) . "</p>
        <p><strong>Experiência:</strong> $experience</p>
    </body>
    </html>
    ";

    // Email headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: $email" . "\r\n";

    // Send email with or without attachment
    $mail_sent = false;
    
    if ($has_attachment) {
        // For sending with attachment, we'll use a boundary
        $boundary = md5(time());
        
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "From: $email\r\n";
        $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
        
        // Message part
        $body = "--$boundary\r\n";
        $body .= "Content-Type: text/html; charset=UTF-8\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $body .= chunk_split(base64_encode($message)) . "\r\n";
        
        // Attachment part
        $body .= "--$boundary\r\n";
        $file_content = file_get_contents($resume_path);
        $file_type = mime_content_type($resume_path);
        $body .= "Content-Type: $file_type; name=\"" . basename($resume_path) . "\"\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n";
        $body .= "Content-Disposition: attachment; filename=\"" . basename($resume_path) . "\"\r\n\r\n";
        $body .= chunk_split(base64_encode($file_content)) . "\r\n";
        $body .= "--$boundary--";
        
        $mail_sent = mail($to, $subject, $body, $headers);
    } else {
        $mail_sent = mail($to, $subject, $message, $headers);
    }

    // Send response back to client
    header('Content-Type: application/json');
    
    if ($mail_sent) {
        echo json_encode(['success' => true, 'message' => 'Currículo enviado com sucesso! Entraremos em contato.']);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Erro ao enviar o formulário. Por favor, tente novamente.']);
    }
} else {
    // Not a POST request
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método não permitido']);
}
?>
