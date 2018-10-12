import Vue from "vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router"
import Vuex from "vuex";
import headerbar from "../../../vueComponent/headerbar.vue";
import vate from "../../../vueComponent/vate.vue";
import java from "../../../vueComponent/java.vue";
import web from "../../../vueComponent/web.vue";

Vue.use(VueRouter);
/*使用VueResource插件*/
Vue.use(VueResource);
Vue.use(Vuex);

const router=new VueRouter({
    routes:[
        {
            path:"/vate",
            component:vate,
            name: 'vate',
        },
        {
            path:"/java",
            component:java,
            name: 'java',
        },
        {
            path:"/web",
            component:web,
            name: 'web',
        }
    ]
});

const store=new Vuex.Store({
    state:{
        java:[
            {
                title:"标题1",
                imgUrl:"地址1",
                date:"日期1"
            }
        ]
    },
    conputed:{
        getJavaItems(){
            return store.state.java;
        }
    },
    mutation:{

    }
});

Vue.http.interceptors.push(function (request,next) {
    console.log("请求前");
    next(function (response) {
        console.log("请求后");
        return response.json();
    });
});

var app=new Vue({
    // el:"#app",
    router,
    // render: h => h(headerbar),
    store,
    components:{
        "headerbar":headerbar
    },
    mounted:function () {

        console.log("adsf");
        console.log("");

        this.$http.interceptors.push((request, next) => {
            loading.show = true
            next((response) => {
                loading.show = false
                return response
            });
        });

        this.$http.interceptors.push(function (request,next) {
            console.log("请求前");
            next(function (response) {
                console.log("请求后");
                return response;
            });
        });
        this.$http.get("http://localhost:8080/myController?name=ssddddddddd").then(function (res) {
            console.log("ok")
        },function (res) {
            console.log("no ok")
        })

        var _this=this;
        console.log(1234)
        setTimeout(function () {
            _this.$store.state.java=[ {
                title:"标题2",
                imgUrl:"地址2",
                date:"日期2"
            }, {
                title:"标题3",
                imgUrl:"地址3",
                date:"日期3"
            }]

            console.log(234)
        },2000);
        console.log(123)

    }
}).$mount("#app");