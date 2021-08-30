const Tasks = require('../models/tasks');

exports.createTasks = (req, res) => {
    try{
        const {name, description, status} = req.body;
    const task = new Tasks({name, description, status});

    task.save((error, data) => {
        if(error){
            return res.status(400).json({
                error: error
            });
        }
        if(data){
            return res.status(201).json({
                success: true,
                message: "Task created Successfully !"
            });   
        }
    });
    }catch(e){
        res.status(404).json({e});
    }
}

exports.getTasks = (req, res) => {
    try {
        Tasks.find({}).exec((error, tasks) => {
            if(error) return res.status(400).json({error});
    
            if(tasks){
                res.status(200).json({
                    tasks,
                    success: true
                })
            }
        });
    } catch (error) {
        res.status(500).json({error});
    }
}

exports.deleteTasks = (req, res) => {
    try {
        const {id} = req.params;
    Tasks.findByIdAndRemove(id, (error) => {
        if(error) return res.status(400).json({error});
        res.status(200).json({
            messsage: 'Delete task Successfully!',
            success: true
        })
    });
        
    } catch (error) {
        res.status(500).json({error});
    }
}

exports.updateTasks = async(req, res) => {
    try {
        const id = req.params.id;
        await Tasks.findOneAndUpdate({_id: id}, { "$set": {"status":req.body.status}}, {
             new: true
         });
        res.status(200).json({
            message: "Task update successfully!",
            success: true
        })
        
    } catch (error) {
        res.status(500).json({error});
    }
    
        
}