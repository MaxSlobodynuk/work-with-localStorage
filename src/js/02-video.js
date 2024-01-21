import throttle from 'lodash.throttle';
import Vimeo from '@vimeo/player'

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('timeupdate', throttle(function(e) {
    let time = e.seconds;
    console.log(time);
    localStorage.setItem("videoplayer-current-time", time);
},1000));


const currentTime = localStorage.getItem("videoplayer-current-time");
if (currentTime) {
    player.setCurrentTime(currentTime);
}

