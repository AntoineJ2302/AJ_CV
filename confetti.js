
const sent = document.getElementById('sent')
const confettiBox = document.getElementById('confetti-box')
// CONFETTI EXPLOSION

const animItem = bodymovin.loadAnimation({
    wrapper: confettiBox,
    animType: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets2.lottiefiles.com/packages/lf20_u4yrau.json'
});


likeSwitch.addEventListener('click', () => {
    confettiBox.classList.remove('hide');
    animItem.goToAndPlay(0,true);
})

animItem.addEventListener('complete', () => {
    confettiBox.classList.add('hide');
})