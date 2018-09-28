import Vue from "vue";
import VueRouter from "vue-router"
import headerbar from "../../../vueComponent/headerbar.vue";
import vate from "../../../vueComponent/vate.vue";
import java from "../../../vueComponent/java.vue";
import web from "../../../vueComponent/web.vue";
Vue.use(VueRouter);

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
    }
}).$mount("#app");