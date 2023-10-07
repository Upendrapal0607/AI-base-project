function generateFeedback(evaluationResult) {
    // Initialize an empty feedback message
    let feedbackMessage = "Feedback: ";

    // Generate feedback based on the evaluation results
    if (evaluationResult.technicalAccuracy < 0.7) {
        feedbackMessage += "Your technical accuracy needs improvement. ";
    }

    if (evaluationResult.clarity < 0.6) {
        feedbackMessage += "Your explanation lacks clarity. ";
    }

    if (evaluationResult.completeness < 0.8) {
        feedbackMessage += "Your response is not comprehensive. ";
    }

    if (evaluationResult.problemSolving < 0.75) {
        feedbackMessage += "Your problem-solving skills can be enhanced. ";
    }

    // You can add more specific feedback messages for other criteria here...

    // Provide an overall feedback message based on the overall score
    if (evaluationResult.overallScore < 0.7) {
        feedbackMessage += "Overall, your response needs improvement.";
    } else {
        feedbackMessage += "Overall, your response is good.";
    }

    return feedbackMessage;
}
module.exports = generateFeedback;