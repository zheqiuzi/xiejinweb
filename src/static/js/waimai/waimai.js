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
                oldCountPrice:0,
                expressFee:null,
                currentCountPrice:null
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
                currentCountPrice:null
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
        deletePrice:function(index,arr){
            if(arr.length<=1){
                alert("每个人至少需要一分订餐，如果没有订餐可以删除订餐人");
                return
            }
            arr.splice(index,1);
            console.log(index)
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

        },
        deletePeople:function(index,arr){
            if(arr.length<=1){
                alert("至少需要一名订餐人");
                return
            }
            arr.splice(index,1);
        },
        toFloat:function(num,numName){
            var _num;
            try {
                _num=parseFloat(num);
            }catch (e) {
                alert(numName+"必须为整数")
                return
            }
            return _num;

        },
        initData:function(){

            var defualtData={
                //最多可选人数
                maxPeopleCount:null,
                //人数
                peopleCount:null,
                //原价
                oldPrice:null,
                //实价
                currentPrice:null,
                //配送费
                expressFee:null,
                //包装费
                packingFee:null,
                //折扣比例
                percent:null,
                orders:[
                    {
                        unitPrice:[
                            {
                                oldPrice:null,
                                currentPrice:null,
                                // packingFee:null
                            }
                        ],
                        oldCountPrice:null,
                        expressFee:null,
                        currentCountPrice:null
                    }
                ]
            }
            Object.assign(this.$data, defualtData);
            console.log(this.$data)
            // Object.assign()
        },
        compute:function () {

            this.percent=this.toFloat(this.oldPrice,"原价")
            this.currentPrice=this.toFloat(this.currentPrice,"实价")
            this.expressFee=this.toFloat(this.expressFee,"配送费")
            this.packingFee=this.toFloat(this.packingFee,"包装费");
            var unitPriceArr=[],折扣比例,订餐人数=this.orders.length;
            var _this=this;
            this.orders.map(function (val,index,arr) {
                val.unitPrice.map(function (_val,_index,_arr) {
                    var price=_this.toFloat(_val.oldPrice,"单价")
                    unitPriceArr.push(price);
                })
            })

            //得到原价列表总价
            var getOldPriceListCount=function () {
                var 订单列表总价=0;
                unitPriceArr.forEach(function (item,index,arr) {
                    订单列表总价+=item;
                })
                return 订单列表总价;
            }

            //得到订单应支付的菜单实价总价
            var getMenuCurrentCount=function () {
                return _this.currentPrice-_this.expressFee-_this.packingFee;
            }

            //获取折扣比例
            var getPercent=function () {
                var 折扣比例=getMenuCurrentCount()/getOldPriceListCount();
                return 折扣比例;
            }

            //获取单价应付款
            var getUnitCurrentPrice=function(unitPrice){
                var 应付款=getPercent()*unitPrice;
                return 应付款;
            }

            // //获取单个商品的包装费价格
            // var getSingleProdExpressFee=function(){
            //     return 包装费/unitPriceArr.length;
            // }

            折扣比例=getPercent();


            var computeUnitPrice=function(oldPrice){
                return getUnitCurrentPrice(oldPrice);

            }



            console.log("总订单原价："+_this.percent+ " 实价："+this.currentPrice+" 配送费："+_this.expressFee+" 包装费："+this.packingFee+"订单人数："+订餐人数+"折扣比例："+折扣比例.toFixed(2));

           //计算订餐价格
            this.orders.map(function (order,index,_orders) {
                order.unitPrice.map(function (unitPrice,_index,_arr) {
                    var currentPrice=computeUnitPrice(unitPrice.oldPrice);
                    unitPrice.currentPrice=currentPrice;
                    order.oldCountPrice=order.oldCountPrice+unitPrice.oldPrice;
                    order.currentCountPrice=order.currentCountPrice+currentPrice;
                })
                //根据订单人数计算配送费
                order.expressFee=_this.expressFee/_this.orders.length;
                //根据订单件数计算打包盒费用
                order.packingFee=_this.packingFee/unitPriceArr.length;
                //计算某人订单总价
                order.currentCountPrice= order.currentCountPrice+order.expressFee+order.packingFee;

                order.currentCountPrice=order.currentCountPrice.toFixed(2)
                order.packingFee=order.packingFee.toFixed(2)
                order.expressFee=order.expressFee.toFixed(2)

            })


        }
    },
    filters:{
        getInfo:function (order) {
            var info="订单应付总价："+order.currentCountPrice+" 订单数量："+order.unitPrice.length+" 其中包装费："+order.packingFee+" 个人承担配送费："+order.expressFee;
            return info
        }
    }
});