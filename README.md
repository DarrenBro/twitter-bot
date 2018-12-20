<b>Inspiration</b>

I wasn't getting my fibre order from BT, after 80 or so days I thought it was better to vent my frustration building something constructive.


<b>What it does</b>

TwitterBot allows you to Tweet any message using aws lambda.
You can run in on a cron scheduler, I have mine to tweet BT 8am and 8pm daily.


<b>How I built it</b>

1. Zipped and uploaded this repo to aws lambda.
2. Made a separate twitterBot account.
3. Got the set of secret api keys from twitter https://developer.twitter.com/en/apps
4. Attached the keys in a separate file on the lambda. (Secret keys are for my own account.)
5. Added 2 cloud watch events crons.
6. Test to check the tweet sends through to my account.


<b>How can you use it</b>
Using the code provided in the index.js, all you have to do is change the tweet message on line 53.

1. Download this repo.
2. Make a separate twitter account for your bot.
3. Get a set of Keys and tokens (4 pairs, example below) from twitter https://developer.twitter.com/en/apps
4. Add those the keys into 'twitter-api-credentials.js'. (Secret keys are for my own account).
5. Add your tweet message.
6. Zip the project and upload to your aws lambda *Make sure to upload only the index.js; package.json and twitter-api-credentials.js files *. Can be uploaded through the console or aws serverless cli.
7. Add a cloud watch cron. e.g. cron(0 8 ? * * *) daily for 8am.
8. Test to check the tweet sends through to my account.


<b>Example of keys</b>

// Add your keys from https://developer.twitter.com/en/apps

  module.exports = {
  
    consumer_key: "1234",
    consumer_secret: "1234",
    access_token_key: "1234",
    access_token_secret: "1234"
  };


<b>Challenges I ran into</b>

The aws lambda can only accept an upload of less than 10mb, this repo will come in under that size, might take a while to upload. 


<b>What I learned</b>

Node, AWS Lambda, Twitter API, serverless cli, crons and ReSTful service requests.


<b>What's next for TwitterBot</b>

1. If possible add an alexa skill to call it adhoc by the user.
2. Add in a web api speed tester for my tweet content with BT.
