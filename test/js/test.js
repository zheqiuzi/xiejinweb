// import someScript from "someScript";
const someScript = require('./someScript.js')

// console.log(someScript.jia(2,3));

//简单函数测试
test('test plus',()=>{
    expect(someScript.plus(1,2)).toBe(3)
})
//异步函数测试 回调验证
test('test async_callback',()=>{
    function callback(data) {
        expect(data).toBe("ok")
    }
    someScript.async_callback(callback)
})

//异步函数测试 承诺（promise）验证
test('test async_promise',()=>{
    expect.assertions(2);
    return someScript.async_promise().then(data=>{
        expect(data).toBe("ok");
    })
})

//异步函数测试 回调验证
// test('test async_callback',()=>{
//     function callback(data) {
//         expect(data).toBe("ok")
//     }
//     someScript.forEach([1,2,4,8],callback)
// })



