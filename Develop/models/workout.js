const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
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

workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;