var jsonFollowers = null;

document.getElementById('button').addEventListener('click',function (response){
  getProfile(document.getElementById('input').value);
});

function getProfile(username){
  fetch(`https://api.github.com/users/${username}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      document.getElementById('loader').style = 'display: none';
      document.getElementById('username').innerText = json.login;
      document.getElementById('avatar').src = json.avatar_url;
      document.getElementById('name').innerText = json.name;
      document.getElementById('location').innerText = json.location;
      document.getElementById('bio').innerText = json.bio;
      document.getElementById('followers_number').innerText = `${json.followers} followers`;
      getFollowers(json.followers_url);
    })
}

function getFollowers(url){
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      jsonFollowers = json;
      listFollowers();
    })
}

function listFollowers(){
  jsonFollowers.forEach(function(follower) {
    var element = document.createElement('li');
    element.innerHTML = `<a href=${follower.html_url}>`
    +`<img src=${follower.avatar_url} alt=${follower.loginName}></img>`
    +`</a>`;
    document.getElementById('followers_list').appendChild(element);
  });
}
  
  