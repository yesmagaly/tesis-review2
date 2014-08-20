var googleapis = require('googleapis');
var auth = new google.auth.OAuth2();
var readline = require('readline');

auth.setCredentials({
  'access_token': user.token
})

/*
var CLIENT_ID = 'YOUR CLIENT ID HERE',
    CLIENT_SECRET = 'YOUR CLIENT SECRET HERE',
    REDIRECT_URL = 'YOUR REDIRECT URL HERE',
    SCOPE = 'https://www.googleapis.com/auth/drive.file';
*/

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// var auth = new googleapis.OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
debugger; 

googleapis.discover('drive', 'v2').execute(function(err, client) {
  var url = auth.generateAuthUrl({ scope: SCOPE });
  var getAccessToken = function(code) {
    auth.getToken(code, function(err, tokens) {
      if (err) {
        console.log('Error while trying to retrieve access token', err);
        return;
      }
      auth.credentials = tokens;
      upload();
    });
  };
  var upload = function() {
    client.drive.files
      .insert({ title: 'My Document', mimeType: 'text/plain' })
      .withMedia('text/plain', 'Hello World!')
      .withAuthClient(auth).execute(console.log);
  };
  console.log('Visit the url: ', url);
  rl.question('Enter the code here:', getAccessToken);
});