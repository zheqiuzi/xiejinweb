var plus=function(x,y){
    return x+y;
}
var async_callback=function(callback){
    setTimeout(()=>callback("ok"),1000)
}

var async_promise=function(){
    var promise=new Promise((resolve,reject)=>{
        setTimeout(resolve,1000,"ok")
    })
    return promise;
}

var forEach=function(arr,callback){
    arr.forEach((item,index,arr)=>{
        callback(item)
    })
}

module.exports={
    "plus":plus,
    "async_callback":async_callback,
    "async_promise":async_promise,
    "forEach":forEach
}