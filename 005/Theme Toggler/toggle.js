var theme1 = true;

document.getElementById('theme').addEventListener('click',function(){
    if (theme1) {
        document.getElementById('div').className='theme2';
        theme1 = false;
    } else {
        document.getElementById('div').className=' ';
        theme1 = true;
    }
})