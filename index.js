// requiring the twitter-api-credentials.js file that exports our credentials
const twitter_credentials = require('./twitter-api-credentials');
// twitter NPM module
const Twitter = require('twitter');
 
// Use exported secret credentials.
// instantiate a new Twitter object and pass the credentials to it
let twitter = new Twitter(twitter_credentials);

// Tweet the passed string message.
// @param message String to be tweeted.
// @param succeed Success callback function.
// @param fail Failure callback function.

function tweet(message, succeed, fail) {
    if (message === null || message === '') {
        fail('Blank message cannot be tweeted.');
        return;
    }
    twitter.post(
        'statuses/update',
        {
            status: message
        },
        // Callback function after response or failure.
        function (error, tweet, response) {
            if (error) {
                // If error, output to log.
                console.log(error);
            } else {
                // If success, output to log.
                console.log('---- TWEETED ----');
                console.log(tweet);
                // Inform Lambda of success.
                succeed(`'${tweet.text}' tweeted.`);
            }
        // Bind passed succeed/fail parameters to callback function params.
        }.bind( {succeed: succeed, fail: fail} )
    );
}

// * Tweets Hello world! via AWS Lambda.
// * @param event AWS Lambda event data for the handler.
// * @param context AWS Lambda runtime information.
exports.tweetHelloWorld = function(event, context) {
    tweet('Hello World', context.succeed, context.fail);
 };
 
 //  * Tweets the current time via AWS Lambda.
 //  * @param event AWS Lambda event data for the handler.
 //  * @param context AWS Lambda runtime information.
 exports.tweetTime = function(event, context) {
     let currentdate = new Date();
     tweet(currentdate.toLocaleTimeString(), context.succeed, context.fail);
 };