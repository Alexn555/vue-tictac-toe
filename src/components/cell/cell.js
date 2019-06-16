import * as tslib_1 from "tslib";
// Cell class that is holder for action sign O or X 
import { Component, Prop, Vue } from 'vue-property-decorator';
import SoundManager from '../../utils/soundmanager';
let Cell = class Cell extends Vue {
    constructor() {
        super();
        this.cellClass = 'cell';
        this.frozen = false; // enables the player to action (place mark)
        this.mark = ''; // holds either X or O to be displayed in the td
        SoundManager.importSound('xpoint');
    }
    created() {
        this.$bus.$on('clearCell', this.onClearCellChange);
        this.$bus.$on('freeze', this.onFreezeChanged);
    }
    strike() {
        if (!this.frozen) {
            // gets either X or O from the Grid component
            this.mark = this.$parent.activePlayer;
            this.frozen = true;
            // fires an event to notify the Grid component that a mark is placed
            this.$bus.$emit('strike', this.name);
            this.setCellColor();
        }
    }
    setCellColor() {
        this.cellClass = this.mark === 'X' ? 'cell-x' : 'cell';
        SoundManager.playxPoint();
    }
    onClearCellChange() {
        this.mark = '';
        this.frozen = false;
        this.cellClass = 'cell';
    }
    onFreezeChanged() {
        this.frozen = true;
    }
};
tslib_1.__decorate([
    Prop()
], Cell.prototype, "name", void 0);
Cell = tslib_1.__decorate([
    Component
], Cell);
export default Cell;
//# sourceMappingURL=cell.js.map