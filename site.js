var user = {
  "login": "profstolley",
  "id": 10054112,
  "avatar_url": "https://avatars3.githubusercontent.com/u/10054112?v=4"
}

$('#user-form').append('<img src="' + user['avatar_url'] + '" />');

$('#user-form').on('submit', function(e) {
  var username = $('#username').val();
  $('#results').append('<li><a href="https://api.github.com/users/' + username + '">' + username + '</a></li>');
  e.preventDefault();
});
$('#username').on('focus', function() {
   console.log('The username element is focused. No "e"');
});
$('#google').on('click', function(event) {
  console.log('OMG they they tried to go to Google!');
  event.preventDefault();
});
