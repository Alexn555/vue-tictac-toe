import xPointSound from '../assets/sounds/xpoint.wav';
import oPointSound from '../assets/sounds/opoint.wav';
import restartSound from '../assets/sounds/restart.wav';
import drawSound from '../assets/sounds/draw.wav';
let soundsOn = false;
export default class SoundManager {
    static importSound(soundName) {
        switch (soundName) {
            case 'xpoint':
                return xPointSound;
            case 'opoint':
                return oPointSound;
            case 'draw':
                return drawSound;
            case 'restart':
            default:
                return restartSound;
        }
        return restartSound;
    }
    static toggleVolume() {
        soundsOn = !soundsOn;
    }
    static getVolume() {
        return soundsOn;
    }
    static playxPoint() {
        SoundManager.playSound(xPointSound);
    }
    static playoPoint() {
        SoundManager.playSound(oPointSound);
    }
    static playDraw() {
        SoundManager.playSound(drawSound);
    }
    static playRestart() {
        SoundManager.playSound(restartSound);
    }
    static playSound(sound) {
        if (!soundsOn) {
            return;
        }
        let audio = new Audio(sound);
        if (!audio) {
            return;
        }
        audio.currentTime = 0;
        audio.play();
    }
}
//# sourceMappingURL=soundmanager.js.map