
// Cell class that is holder for action sign O or X 
import { Component, Prop, Vue } from 'vue-property-decorator';
import SoundManager from '../../utils/soundmanager';

@Component
export default class Cell extends Vue {
	@Prop() private name: string;
    frozen: boolean;
    mark: string;
    cellClass: string = 'cell';

	constructor() {
    	super();
    	this.frozen = false; // enables the player to action (place mark)
		this.mark = ''; // holds either X or O to be displayed in the td
    }

    created () {
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

}
