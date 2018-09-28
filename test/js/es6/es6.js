"use strict";

var a = [1, 2, 3];
a.forEach(function (item) {
    return console.log(item);
});

var promise = new Promise(function (resolve, reject) {
    setTimeout(resolve, 1000, "done");
});

promise.then(function (value) {
    console.log(value);
});
console.log("-----------")
function* gen(x){
    console.log("1")
    var y=yield x+2;
    console.log("2")
    return y;
}
var g=gen(1);
console.log(g)

 console.log(g.next())

console.log(g.next(2))

class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    toString(){
        return this.x+"-"+this.y;
    }
}

var point=new Point(11,22);
console.log(point.toString());
