const generateFeedback = require("./generateFeedback");


function calculateOverallScore(evaluationResult, criteria) {
    let totalWeightedScore = 0;
    let totalWeight = 0;

    for (const criterion in criteria) {
        if (evaluationResult.hasOwnProperty(criterion)) {
            totalWeightedScore += evaluationResult[criterion] * criteria[criterion];
            totalWeight += criteria[criterion];
        }
    }

    return totalWeightedScore / totalWeight;
}



function evaluateUserResponse(responseAnalysis) {
   
    const criteria = {
        technicalAccuracy: 0.7, // Example: A score of 0.7 or higher indicates good technical accuracy.
        clarity: 0.6, // Example: A score of 0.6 or higher indicates good clarity in explanations.
        completeness: 0.8, // Example: A score of 0.8 or higher indicates a comprehensive response.
        problemSolving: 0.75, // Example: A score of 0.75 or higher indicates strong problem-solving skills.
        // Add more criteria as needed
    };

    // Perform evaluation based on the criteria
    let evaluationResult = {
        technicalAccuracy: 0,
        problemSolving: 0,   
    };

    if (userResponse.includes('correct technical term')) {
        evaluationResult.technicalAccuracy = 0.8;
    } else {
        evaluationResult.technicalAccuracy = 0.6;
    }

    if (userResponse.includes('effective problem-solving')) {
        evaluationResult.problemSolving = 0.8; 
    } else {
        evaluationResult.problemSolving = 0.6;
    }

    const overallScore = calculateOverallScore(evaluationResult, criteria);
   
    const feedback = generateFeedback(evaluationResult);

    return {
        criteria: evaluationResult,
        overallScore: overallScore,
        feedback: feedback,
    };
    // return {
    //     criteria: evaluationResult,
    //     overallScore: overallScore,
    //     technicalAccuracy: 8, 
    //     clarity: 7, 
    //     completeness: 9, 
    //     overallScore: 8.0, 
    //     feedback: "Your response is technically accurate, but it lacks detail in some areas. Consider providing more examples for clarity."
    // };
}
module.exports = { evaluateUserResponse }

