const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController')


router.get('/home', TaskController.homeTasks);
router.get('/add', TaskController.createTask)
router.get('/', TaskController.showTasks)
router.get('/edit/:id', TaskController.updateTask)
router.post('/add', TaskController.createTaskSave)
router.post('/edit', TaskController.updateTaskPost)
router.post('/updatestatus', TaskController.toggleTaskStatus)
router.post('/remove', TaskController.removeTask)



module.exports = router 