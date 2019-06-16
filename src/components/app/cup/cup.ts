import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Cup extends Vue {
    @Prop() private name: string;
    @Prop() private playerClass: string;
    @Prop() private wins: Array<Number>;

    constructor() {
        super();
    }

}