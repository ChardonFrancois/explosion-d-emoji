const containerSlot = document.querySelector('.slot');
const btnConfettis = document.querySelector('.btn-confettis');

const emojis = ["🍒","🍑","🍓","🫐","🍍"];

btnConfettis.addEventListener('click', fiesta);

function fiesta(){

    for(let i = 0; i < 69 ; i++){
        const confetti = document.createElement('div');
        confetti.innerText = emojis[Math.floor(Math.random() *  emojis.length)];
        containerSlot.appendChild(confetti);
    }
    animateConfettis();
}

function animateConfettis(){
    const TLCONF = gsap.timeline()
    TLCONF
    .to('.slot div', {
        x: "random(-100,100)",
        y: "random(-100,100)",
        z: "random(0,1000)",
        rotation: "random(-90,90)",
        duration: 1

    })
}