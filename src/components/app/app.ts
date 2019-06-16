import Grid from '../grid/grid.vue';
import Cup from './cup/cup.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';
import SoundManager from '../../utils/soundmanager';

@Component({
  components: {
    Cup,
    Grid,
  },
})
export default class App extends Vue {
  name: string;
  matchCount: number;
  toggleSounds: boolean;
  soundsOn: string;
  wins: any = {
        O: 0,
        X: 0
  };

  constructor() {
     super();
     this.name = 'App';
     this.matchCount = 0;
     this.toggleSounds = false;
     this.soundsOn = 'on';
  }

  restart () {
    this.clearCell();
    this.gridReset();
    this.matchCount++;
  }

  toggleSound() {
      SoundManager.toggleVolume();
      this.toggleSounds = true;
      this.getVolume();
      setTimeout(() => { this.toggleSounds = false; }, 300);
  }

  getVolume() {
      this.soundsOn = SoundManager.getVolume() ? 'on' : 'off';
  }

  clearCell() {
      this.$bus.$emit('clearCell');
  }

  gridReset() {
      this.$bus.$emit('gridReset');
  }

  created () {
      this.$bus.$on('win', this.onWinnerChanged)
  }

  onWinnerChanged(winner: string) {
      this.wins[winner]++;
  }

}
