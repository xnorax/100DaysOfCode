// The first then function returns JSON which will be the input parameter in the next then function
fetch('https://api.github.com/users/xnorax')
    .then(function(response){
        console.log(`Response status is ${response.status}`);
        return response.json();
    })
    .then(function(json){
        console.log(`Json object: ${JSON.stringify(json)}`);
    })