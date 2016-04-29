// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '209259236130569', // your App ID
        'clientSecret'    : '4d53e55532a1a9f29ea0fbb0f5acce72', // your App Secret
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'        : 'cq2d8YaeTAhfaK8bQYmIRYslL',
        'consumerSecret'     : 'QYFuaPnHkwzdlgOb69WsMr0nC7QrTpmEznlNPMg06eR0KCYN1U',
        'access_token'       : '492434588-OuNZTAPaIHRcetmnqQYNVX0vIyu5tWq090nPiFRK',
        'access_token_secret': 'pDZlRJh7YWVVqqQpY6Y5xw2X3eBSFz7MJAAE4MNY2WsuC',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    }/*,

    'googleAuth' : {
        'clientID'         : 'your-secret-clientID-here',
        'clientSecret'     : 'your-client-secret-here',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }*/

};