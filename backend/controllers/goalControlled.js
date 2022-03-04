
import asyncHandler from 'express-async-handler';
//-- allows one to use errorHandler instead of catching missed promises.
// -- Pass your function as first arg to asyncHandler();

const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({at1: "lunch"});
})

const setGoal = asyncHandler(async (req, res) => {
    var b = req.body;
    console.log("bodyof post req.body.text:", b.text, "type", typeof b);   // body undefined -> needs some middleware.
    //console.log(typeof b.astring);
    if(!b.text){
        res.status(400);   // 500 is internal server error, 400 is bad request.
        throw new Error("goalControlled l.12.  Please add text field to top json object.");
    }
    res.status(200).json({at1: "created/set/posted goal"});
})

const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({at1: `Update goal ${req.params.id}`});
})

const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({at1: `Del goal ${req.params.id}`});
})

export { getGoals, setGoal, updateGoal, deleteGoal};

function toType(obj) { return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1];}
