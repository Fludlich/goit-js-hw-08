
import Vimeo from "@vimeo/player"
import throttle from "lodash.throttle";


const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const onPlay = function(data) {
 console.log(data)
 localStorage.setItem('video-player-current-time', JSON.stringify(data))
};

player.on('timeupdate', throttle(onPlay, 1000));
 const currentTime = localStorage.getItem('video-player-current-time')

    const lal = JSON.parse(currentTime)
    
    player.setCurrentTime(lal.seconds).then(function(seconds) {
         seconds = seconds
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });