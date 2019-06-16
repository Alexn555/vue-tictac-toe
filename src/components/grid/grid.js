import * as tslib_1 from "tslib";
import Cell from '../cell/cell.vue';
import { Component, Watch, Vue } from 'vue-property-decorator';
import SoundManager from '../../utils/soundmanager';
var Status;
(function (Status) {
    Status[Status["Win"] = 'win'] = "Win";
    Status[Status["Draw"] = 'draw'] = "Draw";
    Status[Status["Turn"] = 'turn'] = "Turn";
})(Status || (Status = {}));
var StatusClass;
(function (StatusClass) {
    StatusClass[StatusClass["Win"] = 'statusWin'] = "Win";
    StatusClass[StatusClass["Draw"] = 'statusDraw'] = "Draw";
    StatusClass[StatusClass["Turn"] = 'statusTurn'] = "Turn";
})(StatusClass || (StatusClass = {}));
let Grid = class Grid extends Vue {
    constructor() {
        super();
        this.activePlayer = 'O';
        this.gameStatus = Status.Turn;
        this.gameStatusMessage = `O's turn`;
        this.gameStatusColor = StatusClass.Turn;
        this.enableTurnMsg = true;
        this.movesCount = 0;
        this.cells = {
            1: '', 2: '', 3: '',
            4: '', 5: '', 6: '',
            7: '', 8: '', 9: '',
        };
        this.winLines = [
            [1, 2, 3], [4, 5, 6], [7, 8, 9],
            [1, 4, 7], [2, 5, 8], [3, 6, 9],
            [1, 5, 9], [3, 5, 7] // diagonals
        ];
        SoundManager.importSound('restart');
        SoundManager.importSound('draw');
    }
    get nonActivePlayer() {
        return this.activePlayer === 'O' ? 'X' : 'O';
    }
    onGameStatusChanged() {
        if (this.gameStatus === Status.Win) {
            this.gameStatusColor = StatusClass.Win;
            return;
        }
        else if (this.gameStatus === Status.Draw) {
            this.gameStatusColor = StatusClass.Draw;
            this.gameStatusMessage = 'Draw !';
            return;
        }
        this.changeTurnMessage();
    }
    // changes the active player to the non-active player
    changePlayer() {
        this.activePlayer = this.nonActivePlayer;
        if (this.gameStatus === 'turn') {
            this.changeTurnMessage();
        }
    }
    // checks for possible win conditions from the data
    checkForWin() {
        const ln = this.winLines.length;
        for (let i = 0; i < ln; i++) {
            // gets a single ln;colnndition wc from the whole array
            let wc = this.winLines[i];
            let cells = this.cells;
            // compares 3 cell values based on the cells in the condition
            if (this.cellValuesEqual(cells[wc[0]], cells[wc[1]], cells[wc[2]])) {
                return true;
            }
        }
        return false;
    }
    setGameFinishedWithWin() {
        // fires win event for the App component to change the score
        this.gameStatusMessage = `${this.activePlayer} Wins !`;
        this.sendWin();
        this.sendFreeze();
        SoundManager.playRestart();
        return Status.Win;
    }
    // checks game status
    changeGameStatus() {
        if (this.checkForWin()) {
            return this.setGameFinishedWithWin();
        }
        else if (this.movesCount === 9) {
            SoundManager.playDraw();
            return Status.Draw;
        }
        return Status.Turn;
    }
    // compare cell values
    cellValuesEqual() {
        var len = arguments.length;
        for (var i = 1; i < len; i++) {
            if (arguments[i] === '' || arguments[i] !== arguments[i - 1]) {
                return false;
            }
        }
        return true;
    }
    created() {
        this.$bus.$on('strike', this.onStrikeChanged);
        this.$bus.$on('gridReset', this.onGridReset);
    }
    sendWin() {
        this.$bus.$emit('win', this.activePlayer);
    }
    sendFreeze() {
        this.$bus.$emit('freeze');
    }
    onStrikeChanged(value) {
        // sets either X or O in the clicked cell
        this.cells[value] = this.activePlayer;
        this.movesCount++;
        // stores the game status by calling the changeGameStatus method
        this.gameStatus = this.changeGameStatus();
        this.changePlayer();
    }
    changeTurnMessage() {
        if (this.enableTurnMsg) {
            this.gameStatusMessage = `${this.activePlayer}'s turn`;
        }
    }
    reset() {
        this.activePlayer = 'O';
        this.gameStatus = Status.Turn;
        this.gameStatusMessage = `O's turn`;
        this.gameStatusColor = StatusClass.Turn;
        this.movesCount = 0;
        this.cells = {
            1: '', 2: '', 3: '',
            4: '', 5: '', 6: '',
            7: '', 8: '', 9: '',
        };
    }
    onGridReset() {
        const self = this; //this.$options.data()
        Object.assign(this.$data, self.reset());
    }
};
tslib_1.__decorate([
    Watch('gameStatus')
], Grid.prototype, "onGameStatusChanged", null);
Grid = tslib_1.__decorate([
    Component({
        components: {
            Cell,
        },
    })
], Grid);
export default Grid;
//# sourceMappingURL=grid.js.map