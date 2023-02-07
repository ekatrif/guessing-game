class GuessingGame {
    constructor() {
        this.result=0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        //Угадываем результат рандомом из ряда между min и max
        this.result = this.min + Math.round((this.max - this.min) / 2);
        return this.result;
        // (this.result>this.number) ? this.lower(this.result) : this.greater(this.result);
        // return this.result;
        //если результат > загаданного, вызываем метод lower(), иначе greater
        // если угадали return result
        

    }

    lower() {
        //новый max - result
        //min прежний
        this.max = this.result;
    }

    greater() {
        //новый min - result
        //max прежний
        this.min = this.result;
    }
}

module.exports = GuessingGame;
