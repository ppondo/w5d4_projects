Array.prototype.bubbleSort = function() {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for(let i = 0; i < this.length; i++) {
            if (this[i] > this[i + 1]) {
                let temp = this[i];
                this[i] = this[i + 1];
                this[i + 1] = temp;
                sorted = false;
            }
        }
    }
    return this;
};

String.prototype.subStrings = function() {
    let arr = [];
    for(let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
            if(i <= j) {
                arr.push(this.slice(i, j+1));
            }
        } 
    }
    return arr;
};


