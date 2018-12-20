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

// Hello world example, fell free to delete
exports.tweetHelloWorld = function(event, context) {
    tweet('Hello World', context.succeed, context.fail);
 };

 exports.tweetMessage = function(event, context) {
     let oneDay = 24*60*60*1000, // hours*minutes*seconds*milliseconds
         firstDate = new Date("08/22/2018"), //USA date format
         currentDate = new Date(),
         diffDays = Math.round(Math.abs((currentDate.getTime() - firstDate.getTime())/(oneDay)));

     tweet("Enter Message Here", context.succeed, context.fail);
 };
