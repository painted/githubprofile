function getProfile(username) {
  $('.spinner').show();

  $.get('https://api.github.com/users/' + username ,function(user){
    var newProfile = Mustache.render($('#profile-template').html(), user);
    $('.profile-container').prepend(newProfile);
    $('#username').val('')
  }).error(function(){
    alert("There is no user called " + username);
  }).always(function(){
    $('#username').val('');
    $('.spinner').hide();
  })
}

$(document).ready(function(){
  ['alexmakers', 'painted'].forEach(
    function(username){
      getProfile(username);
    })

  $('#add_profile').on('submit', function(event){
    event.preventDefault();
    getProfile($('#username').val());
  })
 });
