function myFunction(){
    var x = document.getElementById("top-nav");
    console.log(x.className);
    if(x.className === "nav-bar"){
        x.className += " responsive";
    }
    else{
        x.className = "nav-bar";
    }
}

var x = document.getElementById("top-nav");
console.log(x);
console.log(x.className);
document.addEventListener('click', event => {
    if(event.target.closest('#top-nav') === null){
        x.className = "nav-bar";
    };
})

document.addEventListener('click', ({ target }) => 
{
    if (! target.matches('#top-nav, #top-nav *')) {
    document.getElementById('#top-nav').classList.remove('responsive');
    console.log("WORKING")
  }
});

function getClubs(search = "blood"){
    let clubs = document.getElementsByClassName("events-flex");
    for(let i=0; i<clubs.length; i++){
        if(clubs[i].children[0].children[2].children[0].children[0].innerHTML.toLowerCase !== search){
            clubs[i].style.display = none;
        }
    }
}

function search_clubs(){
    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('flex-event');
    for(i=0; i<x.length; i++){
        console.log(x[i].id);
        if(!x[i].id.toLowerCase().includes(input)){
            x[i].style.display = "none";
        }
        else{
            x[i].style.display = "flex";
        }
    }
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}