import * as tslib_1 from "tslib";
import { Component, Prop, Vue } from 'vue-property-decorator';
let Cup = class Cup extends Vue {
    constructor() {
        super();
    }
};
tslib_1.__decorate([
    Prop()
], Cup.prototype, "name", void 0);
tslib_1.__decorate([
    Prop()
], Cup.prototype, "playerClass", void 0);
tslib_1.__decorate([
    Prop()
], Cup.prototype, "wins", void 0);
Cup = tslib_1.__decorate([
    Component
], Cup);
export default Cup;
//# sourceMappingURL=cup.js.map