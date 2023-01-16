const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    host:'smtp.office365.com',
    port: 587,
    secure: false, // true somente na porta 465, restante false
    auth: {
        user: 'julianajesus06@hotmail.com',
        pass: 'ju46165383'
    }
});



const mailRoute = ((app => {
    
    app.route('/mails/:id?')
    .get((req,res) => {
        res.status(200).send("Email GET")
    })
    
    .post((req,res) => {
        transport.sendMail({
            from: `${req.body.name} - <julianajesus06@hotmail.com>`,
            to: 'julianajesus06@hotmail.com',
            subject: req.body.assunto,
            html: ` <h5>Nome:</h5><p>${req.body.name}</p><br/> <h5>E-mail:</h5><p>${req.body.mail}</p><br/> <h5>Mensagem:</h5><p>${req.body.message}</p>`
        })
        return res.status(200).send("Email Enviado")
    })
   
})) 

module.exports = mailRoute


