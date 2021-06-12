const slides = document.querySelectorAll('.slide')
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