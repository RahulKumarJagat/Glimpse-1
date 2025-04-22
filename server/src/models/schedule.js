import mongoose from "mongoose";

const scheduleSchema = mongoose.Schema({
    title: {
        type: String
    },
    schedule: {
        type: Date,
        required: true
    },
    protected: {
        type: Boolean,
        default: false
    },
    description: {
        type: String
    }
})

const ScheduleSchema = mongoose.models.schedule | mongoose.model("schedule", scheduleSchema)

export default ScheduleSchema