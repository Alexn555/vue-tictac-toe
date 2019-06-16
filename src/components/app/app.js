import * as tslib_1 from "tslib";
import Grid from '../grid/grid.vue';
import Cup from './cup/cup.vue';
import { Component, Vue } from 'vue-property-decorator';
import SoundManager from '../../utils/soundmanager';
let App = class App extends Vue {
    constructor() {
        super();
        this.wins = {
            O: 0,
            X: 0
        };
        this.name = 'App';
        this.matchCount = 0;
        this.toggleSounds = false;
        this.soundsOn = 'on';
    }
    restart() {
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
    created() {
        this.$bus.$on('win', this.onWinnerChanged);
    }
    onWinnerChanged(winner) {
        this.wins[winner]++;
    }
};
App = tslib_1.__decorate([
    Component({
        components: {
            Cup,
            Grid,
        },
    })
], App);
export default App;
//# sourceMappingURL=app.js.map