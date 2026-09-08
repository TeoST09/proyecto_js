let btnPrev = document.getElementById('slider_left')
let btnNext = document.getElementById('slider_right')
let img = document.getElementById('slider_image')

let counter = 0

const images = [
    'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80'
]

function pasarImagen() {
    img.src = images[counter]
    img.alt = `Imagen ${counter + 1}`
}

pasarImagen()

btnPrev.addEventListener('click', () => {
    if(counter != 0){
        counter--
        pasarImagen()
    }
})

btnNext.addEventListener('click', () => {
    if(counter != images.length){
        counter++
        pasarImagen()
    }
})