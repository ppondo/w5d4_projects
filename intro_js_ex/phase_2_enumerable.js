Array.prototype.myEach = function (cb) {
    for(let i = 0; i < this.length; i++) {
        cb(this[i]);
    }
};

Array.prototype.myMap = function (cb) {
    let arr = [];
    this.myEach(function(ele) {
        arr.push(cb(ele));
    });
    return arr;
};

Array.prototype.myReduce = function (callback , initialValue) {
    let arr = this;
    let acc = initialValue;

    if (!initialValue) {
        acc = this[0];
        arr = this.slice(1, this.length); 
    }
    arr.myEach(function(ele) {
        let result = callback(acc, ele);
        acc = result;
    });
    
    return acc;
};

function callback(acc, el) {
    if (acc < el) {
        return el;
    } else {
        return acc;
    }
}