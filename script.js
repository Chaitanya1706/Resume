var navbarTags = document.querySelectorAll('#navbar a');

for(var i=0;i<navbarTags.length;i++){
    navbarTags[i].addEventListener('click',function(e){
        e.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);
        
        var interval = setInterval(function(){
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        },30)
    })
}

let progressBars = document.querySelectorAll('.skills-indicator > div');
let skillsContainer = document.getElementById('skills-display');



function initialiseBars(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for(let bar of progressBars){
    initialiseBars(bar);
}


function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}


// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBars(bar);
        }

    }
}


window.addEventListener("scroll", checkScroll);





