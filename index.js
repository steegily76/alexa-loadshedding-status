// const Alexa = require('ask-sdk-core');
//
// // Handler for the LaunchRequest
// const LaunchRequestHandler = {
//     canHandle(handlerInput) {
//         return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
//     },
//     handle(handlerInput) {
//         const speakOutput = 'Welcome to my custom Alexa skill!';
//         return handlerInput.responseBuilder
//             .speak(speakOutput)
//             .getResponse();
//     }
// };
//
// // Handler for other intents
// const MyIntentHandler = {
//     canHandle(handlerInput) {
//         return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
//             && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MyIntent';
//     },
//     handle(handlerInput) {
//         const speakOutput = 'This is the response for MyIntent.';
//         return handlerInput.responseBuilder
//             .speak(speakOutput)
//             .getResponse();
//     }
// };
//
// // Skill builder
// const skillBuilder = Alexa.SkillBuilders.custom();

// Lambda handler
exports.handler = function(){

}