class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.result = Math.round(this.min + (this.max - this.min) / 2);
        return this.result;
    }

    lower() {
        this.max = this.result;
        return this.guess();
    }

    greater() {
        this.min = this.result;
        return this.guess(); 
    }
}

module.exports = GuessingGame;
