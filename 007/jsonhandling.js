fetch('https://api.github.com/users/cassidoo')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    document.getElementById('username').innerText = json.login;
    document.getElementById('avatar').src = json.avatar_url;
    document.getElementById('name').innerText = json.name;
    document.getElementById('location').innerText = json.location;
    document.getElementById('bio').innerText = json.bio;
    document.getElementById('followers_number').innerText = json.followers;
    getFollowers(json.followers_url);
  })

function getFollowers(url){
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      for (var i=0;i<10 && i<json.length ;i++){
        document.getElementById('followers_list').appendChild(addItem(json[i].login,json[i].avatar_url));
      }
    })
}

function addItem(loginName,avatar_url){
  var entry = document.createElement('li');
  
  var name = document.createTextNode(loginName);
  var image = document.createElement("img");

  image.setAttribute('src', avatar_url);
  image.style.width='100px';
  image.style.height='100px';
  
  entry.appendChild(name);
  entry.appendChild(image);
  return entry;      
}
  
  