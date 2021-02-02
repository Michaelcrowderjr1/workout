const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Defines WorkoutSchema
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  //Defines exercises by type, name, duration, reps, sets and distance, and total duration
  exercises: [
    {
      type: {
        type: String,
        trim: true,
      },
      name: {
        type: String,
        trim: true,
      },
      duration: Number,
      weight: {
        type: Number,
        default: 0
      },
      reps: {
        type: Number,
        default: 0
      },
      sets: {
        type: Number,
        default: 0
      },
      distance: {
        type: Number,
        default: 0
      }
    }
  ],
  totalDuration: {
    type: Number,
    default: 0,
  }

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;