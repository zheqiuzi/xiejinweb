import Vue from "vue";
import VueRouter from "vue-router"
import Vuex from "vuex";
import headerbar from "../../../vueComponent/headerbar.vue";
import vate from "../../../vueComponent/vate.vue";
import java from "../../../vueComponent/java.vue";
import web from "../../../vueComponent/web.vue";

Vue.use(VueRouter);
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

var app=new Vue({
    // el:"#app",
    router,
    // render: h => h(headerbar),
    store,
    components:{
        "headerbar":headerbar
    },
    mounted:function () {
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