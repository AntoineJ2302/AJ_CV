const titreSpansHome = document.querySelectorAll('.home-start-aj');
const homeMenuStart = document.querySelectorAll('.home-menu-start');
const mainHome = document.querySelectorAll('.main-home');
const mainCursus = document.querySelectorAll('.main-cursus');
const mainExperience = document.querySelectorAll('.main-experience');
const projectBoxes = document.querySelectorAll('.project-box');
const plusSwitch = document.getElementById('plus-icon') 
const toggleLightSwitch = document.querySelector('.plus-light')
const toggleLanguageSwitch = document.querySelector('.plus-language')
const toggleLikeSwitch = document.querySelector('.plus-like')
const toggleMusicSwitch = document.querySelector('.plus-music')
const nightSwitch = document.getElementById('night-mode-icon') 

// MAIL SENT ANIMATION
const mailSent = bodymovin.loadAnimation({
    wrapper: sent,
    animType: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets3.lottiefiles.com/packages/lf20_y9qOnk.json'
});


//ONLOAD ANIMATION
window.addEventListener('load', () => {
    const TLHome = gsap.timeline({paused: true});
    TLHome
    .staggerFrom(titreSpansHome, 1, {transform: "scale(0)",  ease: "power2.out"}, 0.25)
    .staggerFrom(homeMenuStart, 1, {opacity: 0, ease: "power2.out"}, 0.15) 
    .staggerFrom(mainHome, 1, {opacity: 0, ease: "power2.out", y:+100}, 0.25, )
    TLHome.play();
})
window.addEventListener('load', () => {
    const TLCursus = gsap.timeline({paused: true});
    TLCursus
    .staggerFrom(mainCursus, 1, {opacity: 0, ease: "power2.out", x:+200}, 0, )
    TLCursus.play();
})
window.addEventListener('load', () => {
    const TLExperience = gsap.timeline({paused: true});
    TLExperience
    .staggerFrom(mainExperience, 1, {opacity: 0, ease: "power2.out", y:-500}, 0, )
    TLExperience.play();
})
window.addEventListener('load', () => {
    const TLProjects = gsap.timeline({paused: true});
    TLProjects
    .staggerFrom(projectBoxes, 1, {opacity: 0, ease: "power2.out", y:+180}, 0, )
    TLProjects.play();
})

// CONTACT STEPS 
const App = new Vue({

    el:"#app",

    data:{
        step:1,
        totalsteps: 3,
        errors:[],

        form: {

            name:null,
            email:null,
            message:null,
        }

    },

methods:{

    prevStep:function()
    {
        this.step--;
    },


    nextStep:function()
    {
        if(this.step == 1)
        {
            this.errors = null;
            if(!this.form.name)
            {
                this.errors = 'Merci de renseigner votre nom.'
                return false;
            }
        }

        if(this.step == 2)
        {
            this.errors = null;
            if(!this.form.email)
            {
                this.errors = 'Merci de renseigner votre email.'
                return false;
            }
        }

       
        this.step++;
    },

    sendEnquiry:function()
    {
        if(this.step == 3)
        {
            if(!this.form.message)
            {
                this.errors = 'Merci de taper votre email.'
                return false;
            }
        }
        this.errors = null;

        sent.classList.remove('hide');
        mailSent.goToAndPlay(0,true);
    }

},

});

