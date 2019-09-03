var nodemailer = require('nodemailer');
var $usuario = 'email contato Tem Saida @gmail.com'; 
var $senha = 'senha do email contato Tem Saida aqui'; 

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: $usuario,
        pass: $senha
    }
});

var $destinatario = 'email da pessoa que enviou a mensagem'; 

var envioEmail = {
    from: $usuario,
    to: $destinatario,
    subject: 'Assunto',
    text: 'Mensagem!'
};

transporter.sendMail(envioEmail, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email enviado: ' + info.response);
    }
});