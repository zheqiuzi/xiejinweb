import Vue from "vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router"
import headerbar from "../../../vueComponent/headerbar.vue";
import vate from "../../../vueComponent/vate.vue";
import java from "../../../vueComponent/java.vue";
import web from "../../../vueComponent/web.vue";

Vue.use(VueRouter);
/*使用VueResource插件*/
Vue.use(VueResource);

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

var app=new Vue({
    // el:"#app",
    router,
    // render: h => h(headerbar),
    components:{
        "headerbar":headerbar
    },
    mounted:function () {
        console.log("adsf");
        console.log("");
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
    }
}).$mount("#app");