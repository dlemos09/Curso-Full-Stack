const Task = require('../models/Task')

module.exports = class TaskController {
    static createTask(req, res) {
        res.render('tasks/create')
    }

    static showTasks(req, res) {

        Task.findAll({ raw: true })
            .then((data) => {
                res.render('tasks/all', { tasks: data })
            })
            .catch((err) => console.log(err))

    }

    static homeTasks(req, res) {
        res.render('tasks/home')
    }

    static async createTaskSave(req, res) {
        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false,
        }

        await Task.create(task)

        res.redirect('/tasks')
    }

    static removeTask(req, res) {
        const id = req.body.id

        Task.destroy({ where: { id: id } })
            .then(res.redirect('/tasks'))
            .catch((err) => console.log(`Erro ao remover tafera ${err}`))
    }

    static updateTask(req, res) {
        const id = req.params.id

        Task.findOne({ where: { id: id }, raw: true })
            .then((data) => {
                res.render('tasks/edit', { task: data })
            })
            .catch((err) => console.log(`Erro ao atualizar tarefa ${err}`))
    }

    static updateTaskPost(req, res) {
        const id = req.body.id

        const task = {
            title: req.body.title,
            description: req.body.description,
        }

        Task.update(task, { where: { id: id } })
            .then(res.redirect('/tasks'))
            .catch((err) => console.log(`Erro ao enviar dados atualizados ${err}`))
    }



    static toggleTaskStatus(req, res) {
        const id = req.body.id

        console.log(req.body)

        const task = {
            done: req.body.done === '0' ? true : false,
        }

        console.log(task)

        Task.update(task, { where: { id: id } })
            .then(res.redirect('/tasks'))
            .catch((err) => console.log(`Erro ao enviar dados atualizados ${err}`))
    }
}