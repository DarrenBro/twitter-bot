// requiring the twitter-api-credentials.js file that exports our credentials
const twitter_credentials = require('./twitter-api-credentials');
// twitter NPM module
const Twitter = require('twitter');
 
// Use exported secret credentials.
// instantiate a new Twitter object and pass the credentials to it
let twitter = new Twitter(twitter_credentials);

twitter.post(
    'statuses/update',
    {
        status: 'DBro test'
    },
    function(error, tweet, response) {
        if(error) {
            console.log(error);
            throw error;
        }
        console.log('---- TWEET ----');
        console.log(tweet);
        console.log('---- RESPONSE ----');
        console.log(response);
    }
);