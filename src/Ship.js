export default class Ship {
    constructor(name, length) {
        this.name = name;
        this.length = length;
        this.numberOfHits = 0;
    }

    hit() {
        if (this.numberOfHits < this.length) {
            this.numberOfHits++;
        }
    }

    isSunk() {
        return this.numberOfHits >= this.length;
    }
}