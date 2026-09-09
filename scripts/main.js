let btnTop = document.getElementById('arriba')

btnTop.addEventListener('click', function(){
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})