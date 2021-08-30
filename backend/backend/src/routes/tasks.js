const express = require('express');
const { getTasks, createTasks, deleteTasks, updateTasks } = require('../controllers/tasks');
const router = express.Router();


router.post('/create-task', createTasks);
router.get('/get-task', getTasks);
router.delete('/delete-task/:id', deleteTasks);
router.patch('/update-task/:id', updateTasks);

module.exports = router;