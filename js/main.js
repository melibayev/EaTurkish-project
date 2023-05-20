// Loader

window.addEventListener('DOMContentLoaded', () =>{

    const loader = document.querySelector('.loader')
    
    setTimeout(() =>{
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none'
        }, 500)
    }, 2000)
    
    })

  // BACKTOP function
window.addEventListener("scroll", function () {
    toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backtop.style.bottom = "50px";
    } else {
        backtop.style.bottom = "-50px";
    }
}


// Aos function
AOS.init({
    duration: 1000
});

