document.getElementById("btn-about").addEventListener('click', function(){
    document.getElementById("btn-main").style.display = 'none';
    document.getElementById("about").style.display = 'block';
})

document.getElementById("btn-back").addEventListener('click', function(){
    document.getElementById("about").style.display='none';
    document.getElementById("btn-main").style.display = 'block';
})
