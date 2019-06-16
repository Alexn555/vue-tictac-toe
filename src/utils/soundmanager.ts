const xPointSound = '../assets/sounds/xpoint.wav';
const restartSound = '../assets/sounds/restart.wav';
const drawSound = '../assets/sounds/draw.wav';

let soundsOn = false;

export default class SoundManager {

   static toggleVolume(){
	   soundsOn = !soundsOn;
   }

   static getVolume() {
	   return soundsOn;
   }

    static playxPoint(){
        SoundManager.playSound(xPointSound);
    }

    static playDraw(){
        SoundManager.playSound(drawSound);
	}

    static playRestart(){
        SoundManager.playSound(restartSound);
	}

    static playSound(sound: string) {
		if (!soundsOn) { return; }
		let audio = new Audio(sound);
        if (!audio) { return; }
        audio.currentTime = 0;
		audio.play();
	}

}