import { LightningElement } from 'lwc';

export default class Controls extends LightningElement {
    factors = [0,2,3,4,5,6];
    factors2 = [2,3];
    handleAdd() {
        this.dispatchEvent(new CustomEvent('add'));
      }
      handleSubtract() {
        this.dispatchEvent(new CustomEvent('subtract'));
      }
      handleMultiply(event) {
        const factor = event.target.dataset.factor;
        this.dispatchEvent(new CustomEvent('multiply', {
          detail: factor
        }));
      }

      handleDivify(event) {
        const factor = event.target.dataset.factor;
        this.dispatchEvent(new CustomEvent('divify', {
          detail: factor
        }));
      }
}