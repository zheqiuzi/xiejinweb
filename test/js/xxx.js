var k=function(){

}

var k1=new k();

var m=function(){
    var o={};
    o.a=1;
    this.create(){
        return o;
    }
}

console.log(k1 instanceof k)
console.log(typeof k)

console.log(m.create().prototype.constructor)