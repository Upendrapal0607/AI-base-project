
const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    interviewType: String, // Add more fields for your needs
    feedbackText: String,
});

const FeedbackModel = mongoose.model("feedback", feedbackSchema);

module.exports = FeedbackModel;