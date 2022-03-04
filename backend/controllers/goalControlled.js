
import asyncHandler from 'express-async-handler';
//-- allows one to use errorHandler instead of catching missed promises.
// -- Pass your function as first arg to asyncHandler();

import Goal from '../model/goalSchema.js';


// @route GET /api/goals
//
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find();  // can narrow, this gets all.
    res.status(200).json(goals);
    //res.status(200).json({at1: "lunch"});
})

//@route POST /api/goals
//
const setGoal = asyncHandler(async (req, res) => {
    var b = req.body;
    console.log("bodyof post req.body.text:", b.text, "type", typeof b);   // body undefined -> needs some middleware.
    //console.log(typeof b.astring);
    if(!b.text){
        res.status(400);   // 500 is internal server error, 400 is bad request.
        throw new Error("goalControlled l.12.  Please add text field to top json object.");
    }
    const goal = await Goal.create({
        text: b.text,
        email: b.email
    });
    res.status(200).json(goal);       //{at1: "created/set/posted goal"});
})

// @route PUT /api/goals/:id
//
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400);
        throw new Error("Goal id not found " + req.params.id)
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedGoal);       //{at1: `Update goal ${req.params.id}`});
});

// @route DELETE /api/goals/:id
//

const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400);
        throw new Error("Goal id not found " + req.params.id)
    }
    goal.deleteOne();
    //const deletedGoal = await Goal.findOneAndDelete(req.params.id); //, req.body, { new: true });
    res.status(200).json({id: req.params.id});       //{at1: `Update goal ${req.params.id}`});
});

// See api ref https://mongoosejs.com/docs/api.html#model_Model.findByIdAndDelete
// see also Model.prototype.deleteOne

// res.status(200).json({at1: `Del goal ${req.params.id}`});


export { getGoals, setGoal, updateGoal, deleteGoal};

function toType(obj) { return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1];}
