document.addEventListener('keydown', (e) => {

    let key =  e.key.toLowerCase();
    let audio = new Audio(`sounds/${key}.mp3`);

    audio.play();

    let animation = document.querySelector(`.key[data-key="${key}"]`);
    if(animation){
        animation.classList.add('active');
        setTimeout(() => {
            animation.classList.remove('active');
        }, 100);
    }


});
