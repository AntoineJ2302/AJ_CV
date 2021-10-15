// PLUS SWITCH
const englishSwitch = document.getElementById('english-icon') 
const likeSwitch = document.getElementById('like-icon') 
const musicSwitch = document.getElementById('music-icon') 
const pageBody = document.body
const homeIcon = document.getElementById('home-icon') 
const cursusIcon = document.getElementById('cursus-icon') 
const experiencesIcon = document.getElementById('experiences-icon') 
const projectsIcon = document.getElementById('projects-icon') 
const contactIcon = document.getElementById('contact-icon') 
const plusSection = document.getElementById('plus-section') 
const musicPlayer = document.getElementById('music-player') 
const playButton = document.getElementById('play') 
const cdPic = document.getElementById('cd-pic') 
var audio = document.getElementById('audio')
var playPauseButton = document.getElementById('play')
var count = 0;
// MUSIC PLAYER
const music = new Audio('music/music.mp3');
music.play();
music.loop =true;
music.playbackRate = 1;
music.pause()



let darkMode = localStorage.getItem('darkMode');

// PLUS ANIMATION
plusSwitch.addEventListener("click", function() {
    plusSwitch.classList.toggle("plus-icon-active");
});

plusSwitch.addEventListener("click", () => {
    toggleLightSwitch.classList.toggle("hidden")
    toggleLanguageSwitch.classList.toggle("hidden")
    toggleLikeSwitch.classList.toggle("hidden")
    toggleMusicSwitch.classList.toggle("hidden")
});

// DARK MODE

const enableDarkMode = () => {

    pageBody.classList.add("night-mode")
    nightSwitch.classList.add("night-mode")  
    englishSwitch.classList.add("night-mode")  
    likeSwitch.classList.add("night-mode")  
    musicSwitch.classList.add("night-mode")  
    plusSwitch.classList.add("night-mode")  
    homeIcon.classList.add("night-mode")  
    cursusIcon.classList.add("night-mode")  
    experiencesIcon.classList.add("night-mode")  
    projectsIcon.classList.add("night-mode")  
    contactIcon.classList.add("night-mode")  
    localStorage.setItem("darkMode", "enabled");
}
const disableDarkMode = () => {

    pageBody.classList.remove("night-mode")
    nightSwitch.classList.remove("night-mode")  
    englishSwitch.classList.remove("night-mode")  
    likeSwitch.classList.remove("night-mode")  
    musicSwitch.classList.remove("night-mode")  
    plusSwitch.classList.remove("night-mode")  
    homeIcon.classList.remove("night-mode")  
    cursusIcon.classList.remove("night-mode")  
    experiencesIcon.classList.remove("night-mode")  
    projectsIcon.classList.remove("night-mode")  
    contactIcon.classList.remove("night-mode")  
    localStorage.setItem("darkMode", null);
};
if (darkMode === "enabled") {
    enableDarkMode();
}

nightSwitch.addEventListener("click", () => {

    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});


// MUSIC PLAYER

    musicSwitch.addEventListener("click", () => {

        musicPlayer.classList.toggle("play-visible")
    });

    playButton.addEventListener("click", () => {
        cdPic.classList.toggle("play-on")
        musicSwitch.classList.toggle("play-on-icon")
        music.play()
    });

    function playPause(){
        if(count == 0){
            count = 1;
            audio.play();
        }else{
            count = 0;
            audio.pause();
        }
    }

