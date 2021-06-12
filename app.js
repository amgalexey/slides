
function slides(activeClass = 1) {
    const slides = document.querySelectorAll('.slide')
    slides[activeClass].classList.add('active')
    for (const item of slides) {
        item.addEventListener('click', () => {
            clearActiveClasses()
            item.classList.add('active')
        })
    }
    
    function clearActiveClasses() {
        slides.forEach(item => {
            item.classList.remove('active')
        })
    }
          
}
slides(2)