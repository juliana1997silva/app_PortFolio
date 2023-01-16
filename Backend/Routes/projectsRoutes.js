const fs = require('fs')
const { join } = require('path')


const filePath = join(__dirname, 'projects.json')

const getProject = () => {
    const data = fs.existsSync(filePath)
    ? fs.readFileSync(filePath)
    : []

    try {
        return JSON.parse(data)
    } catch (error) {
        return []
    }
}

const saveProject = (users) => fs.writeFileSync(filePath, JSON.stringify(users, null, '\t'))

const projectRoute = (app) => {
    
    app.route('/project/:id?')
    .get((req,res) => {
        const project = getProject()
        res.send({project})
    })
    .post((req,res) => {
        const project = getProject()
       
        project.push(req.body)
        saveProject(project)

        res.status(201).send('OK')
    })
    .put((req, res) => {
        const project = getProject()

        saveProject(project.map(projects => {
            if (projects.id === req.params.id){
                return {
                    ...projects,
                    ...req.body
                }
            }
            return projects
        }))
        res.status(200).send('OK')
    })
    .delete((req, res) => {
        const project = getProject()

        saveProject(project.filter(projects => projects.id !== req.params.id))

        res.status(200).send('OK')
    })
    
}

module.exports = projectRoute


