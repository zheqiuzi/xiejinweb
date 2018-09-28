const s=new Set();
s.add(8);
s.add(9);
s.add(8);

console.log(s.toString());

//keys
for(var i of s.keys()){
    console.log(i)
}
//values
for(var i of s.values()){
    console.log(i)
}

//
