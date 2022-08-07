const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", goToSection);

function goToSection(){
    let pos = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = (current.getBoundingClientRect.top + window.pageYOffset) - 50;
        sectionId = current.getAttribute("id");
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
        } else {
            document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
        }
        
    });
}