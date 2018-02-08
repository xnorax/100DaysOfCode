var count = 0;

document.getElementById('one').addEventListener('click',function(){
    console.log('you clicked the button!');
});

document.getElementById('two').addEventListener('mouseover',function(){
    document.getElementById('two').innerText = `you hover over the button ${++count} time(s)`;
});

document.body.addEventListener('nameOfCustomEvent',customEventFunction);

function customEventFunction(event){
    alert(`Event time is ${event.detail}`);
}

var customEvent = new CustomEvent('nameOfCustomEvent',{
    'detail' : new Date()
});

