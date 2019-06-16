import { shallowMount } from '@vue/test-utils';
import SoundManager from '@/utils/soundmanager';

describe('SoundManager class', () => {

    it('Should toggle sounds volume on /off ', () => {
        const res = !SoundManager.getVolume();
        SoundManager.toggleVolume();
        const volume = SoundManager.getVolume();
        expect(volume).toEqual(res);
    });

    it('Should play sound', () => {
        expect(SoundManager.playxPoint()).toHaveBeenCalled();
    });
});