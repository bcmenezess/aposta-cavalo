const pos = document.querySelectorAll ("p");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const bt = document.querySelector("button");
const horse = document.querySelector ("select");
const circle = document.querySelector ("#circle");
const container = document.querySelector ("#container");


let mov = [0,0,0,0];
let movh1, movh2, movh3, movh4;
let winner = false;

function sorteiaVencedor(index){
    if (winner === false){
        pos[index].style.marginLeft = `515px`;
        h1.innerHTML = `Cavalo ${index+1} venceu`;
    
        if (index + 1 == horse.value){
            h2.innerHTML = "Winner!";
        }
        else{
            h2.innerHTML = "Loser!";
        }
        winner = true;
    }

    if (index == 0 ) {clearInterval (movh1)};
    if (index == 1 ) {clearInterval (movh2)};
    if (index == 2 ) {clearInterval (movh3)};
    if (index == 3 ) {clearInterval (movh4)};
    
    container.style.display = "flex";
    bt.style.display = "block";
    bt.style.borderColor = "rgb(10, 145, 10)";
    bt.innerHTML = "Proxima corrida";
    bt.addEventListener ("click", () => {location.reload();});
}

function sorteiaPos(horse,index){
    let sorteiaSinal = Math.floor(Math.random()*50)+1;
    if (mov[index] >= 500){
        mov[index] = 500;
        sorteiaVencedor(index);
    }
    if (mov[index] <= 0){
        mov[index] = 50;
    }

    horse.style.marginLeft = `${mov[index]}px`;

    if (sorteiaSinal === 1 && mov[index] !== 500){
        mov[index] += 40;
    }
    if (sorteiaSinal > 5 && mov[index] !== 500){
        mov[index] += 0.5;
    }
    if (sorteiaSinal < 6 && mov[index] !== 500){
        mov[index] += Math.floor (Math.random() * 20) + 15;
    }
}

function iniciarCorrida(){
    h1.innerHTML = "";
    h2.innerHTML = "";
    horse.style.display = "none";
    circle.style.display = "none";
    container.style.display = "none";
    bt.style.display = "none";
    bt.removeEventListener ("click", iniciarCorrida);
    movh1 = setInterval(() => sorteiaPos(pos[0], 0), 50);
    movh2 = setInterval(() => sorteiaPos(pos[1], 1), 50);
    movh3 = setInterval(() => sorteiaPos(pos[2], 2), 50);
    movh4 = setInterval(() => sorteiaPos(pos[3], 3), 50);
}

bt.addEventListener ("click", iniciarCorrida);
