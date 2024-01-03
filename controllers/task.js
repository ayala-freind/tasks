// const taskList = [
//     { id: 10, taskTypeId: '1', taskName: 'שגיאת מלאי', taskDescription: 'ניתן להזמין מוצר שלא קיים במלאי', rapist: 'יעקב כהן' },
//     { id: 11, taskTypeId: '2', taskName: 'שגיאת יתרה', taskDescription: 'יש צורך למחוק יתרה זו', rapist: 'אייל טבק' }
// ]

// exports.addTask = (req, res) => {
//     taskList.push(req.body)
//     res.send(taskList)
// }
// exports.showAllTasks = (req, res) => {
//     res.send(taskList)
// }
// exports.removeTaskById = (req, res) => {
//     const id = req.params.id
//     const index = taskList.findIndex(x => x.id == id)
//     taskList.splice(index,1)
//     res.send()
// }
// exports.updateTask=(req,res)=>{
//     const id = req.params.id
//     const index = taskList.findIndex(x => x.id == id)
//     taskList[index].rapist=req.params.rapist
//     res.send()
// }

const Task = require('../models/task')

exports.addTask = async(req,res)=>{
    console.log(req.body);
    const {name} = req.body;
    const task = await Task.create(req.body);
    console.log(task);
    res.json(task)  
}