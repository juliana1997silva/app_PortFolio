const express = require('express')
const bodyParser = require('body-parser')
//const projectRoute = require('./Routes/projectsRoutes')
const mailsRoute = require('./Routes/mailsRoutes')
//const uploadProjects = require('./middlewares/uploadimage')

//const path = require('path')
//const fs = require('fs')
const cors = require('cors')
const app = express()
const porta = 4000


app.use(express.json());

app.use(express.urlencoded({ extended: false }), cors());

//app.use(express.bodyParser());
//projectRoute(app)
mailsRoute(app)
app.use(bodyParser.json()); 

app.get('/',(req, res)=> res.send('Ola Mundo Juliana!'))

app.listen(porta, () => console.log('api rodando na porta 4000'))

//API imagem projetos

/* const filePath = app.use("/files", express.static(path.resolve(__dirname, "public", "upload")))

const getImage = () => {
    const data = fs.existsSync(filePath)
    ? fs.readFileSync(filePath)
    : []

    try {
        return JSON.parse(data)
    } catch (error) {
        return []
    }
}


const imagem = {}
const saveImage = (img) => fs.writeFileSync(filePath, JSON.stringify(img, null, '\t'))

app.post("/image", uploadProjects.single('image'), async (req, res) => {
    if(req.file){
        
        imagem.id = req.file.filename
        imagem.url = `/public/upload/projects/${imagem.id}`
        return res.status(202).json({payload: { id: imagem.id, url: imagem.url}})
    }
    return res.status(400).send("Erro")
})

app.get("/image/:id?" , (req, res) => {
        const imagens = getImage()
        saveImage(imagens.filter(img => img.id !== req.params.id))
        res.status(200).send({imagens})
    }) */