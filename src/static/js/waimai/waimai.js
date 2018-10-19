import Vue from "vue";
import Vuex from "vuex";
// var 原价=67.4,实价=24.4,配送费=0,包装费=5.5,单价数组=[21,35.9],折扣比例,订餐人数=2;
var app=new Vue({
    el:"#app",
    data:{
        //最多可选人数
        maxPeopleCount:50,
        //人数
        peopleCount:0,
        //原价
        oldPrice:67.4,
        //实价
        currentPrice:24.4,
        //配送费
        expressFee:0,
        //包装费
        packingFee:5.5,
        //折扣比例
        percent:0,
        orders:[
            {
                unitPrice:[
                    {
                        oldPrice:21,
                        currentPrice:null,
                        // packingFee:null
                    }
                ],
                expressFee:null,
                countPrice:null
            },
            {
                unitPrice:[
                    {
                        oldPrice:35.9,
                        currentPrice:null,
                        // packingFee:null
                    }
                ],
                expressFee:null,
                countPrice:null
            }
        ]


    },
    mounted:function () {
        
    },
    methods:{
        addPrice:function (index) {
            var price={val:0};
            this.orders[index].unitPrice.push(price);
            console.log("addPrice")
        },
        addPeople:function () {
            var people={
                unitPrice:[
                    {
                        val:0
                    }
                ]
            }
            this.orders.push(people);

            console.log("addPeople")
        },
        toInt:function(num,numName){
            var _num;
            try {
                _num=parseInt(num);
            }catch (e) {
                alert(numName+"必须为整数")
                return
            }
            return _num;

        },
        compute:function () {

            var 原价=this.toInt(this.oldPrice,"原价"),实价=this.toInt(this.currentPrice,"实价"),配送费=this.toInt(this.expressFee,"配送费"),包装费=this.toInt(this.packingFee,"包装费"),单价数组=[],折扣比例,订餐人数=this.orders.length;
            var _this=this;
            this.orders.map(function (val,index,arr) {
                val.unitPrice.map(function (_val,_index,_arr) {
                    var price=_this.toInt(_val.oldPrice,"单价")
                    单价数组.push(price);
                })
            })

            var 得到订餐列表原价总价=function () {
                var 订单列表总价=0;
                单价数组.forEach(function (item,index,arr) {
                    订单列表总价+=item;
                })
                return 订单列表总价;
            }

            var 得到订单应支付的菜单实价总价=function () {
                return 实价-配送费-包装费;
            }

            var 得到订单折扣比例=function () {
                var 折扣比例=得到订单应支付的菜单实价总价()/得到订餐列表原价总价();
                return 折扣比例;
            }

            var 单价应付款=function(单价){
                var 应付款=得到订单折扣比例()*单价;
                return 应付款;
            }

            var 获取单个商品的包装费=function(){
                return 包装费/单价数组.length;
            }

            折扣比例=得到订单折扣比例();

            // var 计算某人订餐价格=function(单价列表){
            //     var 应付总价=0;
            //     var 订单原价=0;
            //     var 包装费=获取单个商品的包装费()*单价列表.length;
            //     var 个人承担配送费=配送费/订餐人数;
            //     单价列表.forEach(function (item,index,array) {
            //         订单原价+=item;
            //         应付总价+=单价应付款(item);
            //     })
            //     应付总价=应付总价+包装费+个人承担配送费;
            //     console.log("订单原价："+订单原价.toFixed(2)+" 订单应付总价："+应付总价.toFixed(2)+" 订单数量："+单价列表.length+" 其中包装费："+包装费.toFixed(2)+" 个人承担配送费："+个人承担配送费.toFixed(2))
            // }


            var computeUnitPrice=function(oldPrice){
                return 单价应付款(oldPrice);

            }




            console.log("总订单原价："+原价+ " 实价："+实价+" 配送费："+配送费+" 包装费："+包装费+"订单人数："+订餐人数+"折扣比例："+折扣比例.toFixed(2));

           //计算订餐价格
            this.orders.map(function (order,index,arr) {
                order.unitPrice.map(function (unitPrice,_index,_arr) {
                    unitPrice.currentPrice=computeUnitPrice(unitPrice.oldPrice);
                })
            })


        }
    },
    filters:{
        getInfo:function (order) {
            var info="订单原价："+" 订单应付总价："+" 订单数量："+order.unitPrice.length+" 其中包装费："+" 个人承担配送费：";
            return "aaaa"
        }
    }
});