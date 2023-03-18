//ASTRONAUT CLICK EVENT
const bubble = document.getElementById('bubble');
let counter = 0;
document.getElementById("astronaut").addEventListener("click", function(){   
    counter++;
    bubble.style.display = "block";
    astronaut.style.backgroundImage = "url(./img/astronaut/idle0.gif)";

    if (counter == 1)
    {
        reset(); 
        bubble.innerHTML = "Hey aufpassen!";
    }
    else if (counter == 2)
    {   
        reset(); 
        bubble.innerHTML = "Puh das war knapp!";
    }
    else if (counter == 3)
    {   
        reset(); 
        bubble.innerHTML = "...";
    }
    else if (counter == 4)
    {   
        reset(); 
        bubble.innerHTML = "Pass auf!";
    }
    else if (counter == 5)
    {   
        reset(); 
        bubble.innerHTML = "Was machst du da?";
    }
	else if (counter == 6)
    {   
        reset(); 
        bubble.innerHTML = "Bitte...";
    }
    else if (counter == 7)
    {   
        reset(); 
        bubble.innerHTML = "Vorsichtig!";
    }
    else if (counter > 5)
    {
        bubble.style.animation = 'none';
        bubble.offsetHeight; /* trigger reflow */
        bubble.style.animation = null; 
        bubble.innerHTML = "Sehr witzig...";
        astronaut.style.backgroundImage = "url(./img/astronaut/idle1.gif)";
        counter = 0;
    }
});

function reset(){
    bubble.style.animation = 'none';
    bubble.offsetHeight; /* trigger reflow */
    bubble.style.animation = null; 
}

//CONTACT ROCKET MOUSE EVENT
let rocket = document.getElementById("contactRocket");
let contactBorder = document.getElementById("contactBorder");
contactBorder.addEventListener("mouseover", function(){ 
    rocket.classList.add("rocketWiggle");
});
contactBorder.addEventListener("mouseleave", function(){ 
    rocket.classList.remove("rocketWiggle");
});

//SKILL-IMG BLINK AUTOMATION
let i = 1;
function automate(){
    var filterOn = document.getElementById("skillID-" + i);
    filterOn.classList.add("skillImgAutomation"); 
    setTimeout(automate, 440);
    if(i>=20){
        i = 1;
    }else{
        i++;
    }
}
automate();