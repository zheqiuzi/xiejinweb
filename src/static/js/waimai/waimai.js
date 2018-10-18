import Vue from "vue";
import Vuex from "vuex";

var app=new Vue({
    el:"#app",
    data:{
        //人数
        peopleCount:0,
        //原价
        oldPrice:10,
        //实价
        currentPrice:0,
        //配送费
        expressFee:0,
        //包装费
        packingFee:0,
        //折扣比例
        percent:0,
        orderInfo:[
            {
                unitPrice:[]
            }
        ]


    },
    mounted:function () {
        console.log(123)
    }
});