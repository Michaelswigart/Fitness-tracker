let { Workout } = require('../models/');
const router = require('express').Router();
 
    // GET route /api/workouts
    router.get('/api/workouts', function(req, res) {
        // Returning the current list of workouts
        Workout.find()
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            res.err(err);
        });
    });

    // PUT route /api/workouts
router.put('/api/workouts/:id'), function (req,res) {
   Workout.findOneAndUpdate({
       _id: req.params.id
   },{
       $inc:{totalDuration:req.body.duration}, $push:{exercises:req.body}
   },{
       new:true
   }).then(data =>{
      res.json(data)
   }).catch(function(err) {
       res.err(err);
   })
};



    // POST route /api/workouts
    router.post('/api/workouts', function (req, res) {
        Workout.create({})
        .then(function(data) {
            res.json(data)
        })
        .catch(function(err) {
            res.err(err); 
        });
    });

    // GET route /api/workouts/range
    router.get('/api/workouts/range', function(req, res) {
        // Returning the current list of workouts
        Workout.find({})
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            res.err(err);
        });
    });
     module.exports = router;