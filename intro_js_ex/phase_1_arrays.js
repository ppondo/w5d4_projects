Array.prototype.uniq = function() {
    let arr = [];
    for(let i = 0; i < this.length; i++) {
        if (!arr.includes(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr;
};

Array.prototype.twoSum = function() {
    let arr = [];
    for(let i = 0; i < this.length; i++) {
        for(let j = 0; j < this.length; j++) {
            if((this[i] + this[j] === 0) && (i < j)) {
                arr.push([i, j]);
            }
        }
    }
    
    return arr;
};

Array.prototype.transpose = function() {
    
    let arr = [];

    for (let i = 0; i < this.length; i++) {
        innerArr = [];
        for (let j = 0; j < this.length; j++) {
            innerArr.push(this[j][i]);
        }
        arr.push(innerArr);
    }
    return arr;
};





