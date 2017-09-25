
// $('#user-form').append('<img src="' + user['avatar_url'] + '" />');
var my_data;
$('#user-form').on('submit', function(e) {
  var username = $('#username').val();
  var url = 'https://api.github.com/users/' + username;
  $.get(url, function(data) {
    var name = data.name;
    var img = data.avatar_url
    if(data.name==null) {
      name = data.login;
    }
    $('#results').append('<li><a id="'+data.login+'" href="'+data.html_url+'">'+name+'</a></li>');
    $('#'+data.login).prepend('<img src="'+img+'" />');

  });

  e.preventDefault();
});
