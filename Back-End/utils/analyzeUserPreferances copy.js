
const compromise = require('compromise');

function analyzeUserPreferences(userPreferences){
    // console.log({userPreferences});
    const doc = compromise(userPreferences);
    console.log({doc});
    const keywords = doc.topics().out('array')
    // console.log({keywords})
    return keywords.join(', ')
}

module.exports = analyzeUserPreferences;