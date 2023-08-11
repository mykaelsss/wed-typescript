const mongoose = require('mongoose')

const WeddingSchema = new mongoose.Schema({
    firstName: {
        type : String,
        required : [true, "Please add a first name."],
        minLength : [3, "First name must be at least 3 characters long."],
        maxLength : [25, "First name must be 25 characters or less."]
    },
    lastName: {
        type : String,
        required : [true, "Please add a last name."],
        minLength : [3, "Last name must be at least 3 characters long."],
        maxLength : [25, "Last name must be 25 characters or less."]
    }
}, { timestamps: true })

module.exports.Wedding = mongoose.model("Wedding", WeddingSchema);
