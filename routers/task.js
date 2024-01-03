const express=require('express')
const router=express.Router();

const{addTask,showAllTasks,removeTaskById,updateTask}=require('../controllers/task')

router.post('/',addTask)
// router.get('/',showAllTasks)
// router.delete('/:id',removeTaskById)
// router.put('/:id,rapist',updateTask)

module.exports=router
