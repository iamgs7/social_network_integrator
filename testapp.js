var Twitter = require('twitter');
 
var client = new Twitter({
    'consumerKey'        : 'cq2d8YaeTAhfaK8bQYmIRYslL',
    'consumerSecret'     : 'QYFuaPnHkwzdlgOb69WsMr0nC7QrTpmEznlNPMg06eR0KCYN1U',
    'access_token'       : '492434588-OuNZTAPaIHRcetmnqQYNVX0vIyu5tWq090nPiFRK',
    'access_token_secret': 'pDZlRJh7YWVVqqQpY6Y5xw2X3eBSFz7MJAAE4MNY2WsuC',
    'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
});
 
var params = {screen_name: 'gaurangshahcr7'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
  else{
    console.log(error);
  }
});