const mopngoose = require("mongoose");

const Schema = mongoose.Schema;

const workOutSchema = new Schema({
    day: {
        type: DataCue,
        default: Date.now(),
    },

exercies: [
    {
        type: {
            type: String,
            trim: true,
        }, 
        name: {
            type: String, 
            trim: true,
            minlength: 3
        }, 
        duration: {
            type: Number,
            min: 1
        }, 
        distance: {
            type: Number,
            min: 1
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        } 
    }
]
});

const Workout = mongoose.model("Workout", workOutSchema);

module.exports = Workout;