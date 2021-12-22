let count = 400;

function render(){
    let container = document.getElementById('pokemon');
    container.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg">`;    
}

let prev= document.getElementById('previousBtn');
let next= document.getElementById('nextBtn');

prev.onclick = function(){
    if (count > 1) {
        count -= 1;
        render();
    }
}

next.onclick = function(){
    if (count < 650){
        count += 1;
        render();
    }
}


render()