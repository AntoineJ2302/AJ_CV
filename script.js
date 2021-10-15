
// EXPERIENCES SCROLL EFFECT

const allRonds = document.querySelectorAll('.rond');
const allBoxes = document.querySelectorAll('.box');
const controller = new ScrollMagic.Controller()

allBoxes.forEach(box => {

    for(i = 0; i < allRonds.length; i++){
        if(allRonds[i].getAttribute('data-anim') === box.getAttribute('data-anim')){

            let tween = gsap.from(box, {y: -50, opacity: 0, duration: 1})
            let scene = new ScrollMagic.Scene({
                triggerElement: allRonds[i],
                reverse: false
            })
            .setTween(tween)
            /* .addIndicators() */
            .addTo(controller)
        }
    }
})

// CURSUS FLIP CARD 

function flipOne() {
    let elOne = document.querySelector('.cursus-one')
    elOne.classList.toggle('flip')
}
function flipTwo() {
    let elTwo = document.querySelector('.cursus-two')
    elTwo.classList.toggle('flip')
}
function flipThree() {
    let elThree = document.querySelector('.cursus-three')
    elThree.classList.toggle('flip')
}

