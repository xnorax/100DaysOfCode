//Promises to handle different responses
function handleErrors(response) {
  if (!response.ok) {
        throw Error(response.statusText);
  }
  return response;
}

document.getElementsByTagName('button')[0].addEventListener('click',()=>{
  document.getElementById('loader').style = 'display: block';
  getData(document.getElementsByTagName('input')[0].value);
});

// pull data from NASA Image API AJAX
function getData (query = 'earth'){
  fetch(`https://images-api.nasa.gov/search?q=${query}&media_type=image`)
  .then(handleErrors)
  .then(response => {
    return response.json();
  })
  .then(json => {
    listImages(json.collection.items);
  })
  .catch(error => console.log(error) );
}

function listImages(items){

  // Clean prev images
  var gallery = document.getElementById('photo-gallery');
  while (gallery.hasChildNodes()) {
    gallery.removeChild(gallery.firstChild);
  }

  items.forEach(function(item) {

    // Destructuring - parse JSON
    var image = {
      link: item.links[0].href,
      description: item.data[0].description
    }

    // replace space with %20
    image.link=image.link.replace(/\ /g, '%20');

    // Mouseover for image caption
    var element = document.createElement('img');
    element.src = image.link;
    element.addEventListener('mouseover',()=>{
      document.getElementById('text').textContent = image.description;
    });
    var li = document.createElement('li').appendChild(element);
    gallery.appendChild(li);
    document.getElementById('loader').style = 'display: none';
  });
}
