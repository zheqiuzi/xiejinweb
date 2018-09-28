<template>
    <div class="header">
        <div class="center-wrap">
            <div class="logo">
                <img src="../static/images/logo_index.png">
            </div>
            <div class="items">
                <a @click="toVate">
                    <p class="zh">简历</p>
                    <p class="en">Vitae</p>
                </a>

                <a @click="toJava">
                    <p class="zh">Java项目</p>
                    <p class="en">Java object</p>
                </a>

                <a @click="toWeb">
                    <p class="zh">Web项目</p>
                    <p class="en">Web object</p>
                </a>

                <a>
                    <p class="zh">H5</p>
                    <p class="en">H5</p>
                </a>

                <a>S
                    <p class="zh">小程序</p>
                    <p class="en">mall app</p>
                </a>

                <a>
                    <p class="zh">安卓</p>
                    <p class="en">Andriod</p>
                </a>


                <a>
                    <p class="zh">个人兴趣项目</p>
                    <p class="en">Personal object</p>
                </a>

                <a>
                    <p class="zh">技术博客</p>
                    <p class="en">Blog</p>
                </a>

                <a>
                    <p class="zh">知识汇总</p>
                    <p class="en">Blog</p>
                </a>


            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "headerbar",
        methods:{
            toVate(){
                this.$router.push({path:"/vate"})
            },
            toJava(){
                this.$router.push({path:"/java"})
            },
            toWeb(){
                this.$router.push({path:"/web"})
            }
        }
    }
</script>

<style scoped>
    *{
        padding: 0px;
        margin: 0px;
        border: 0px;
    }
    .center-wrap{
        width: 985px;
        margin: auto;
    }
    .header{
        padding: 28px 0px 12px 0px;
        box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.07);
        top: 0px;
        left: 0px;
        right: 0px;
        position: fixed;
        background: #fff;
    }
    .header .logo{

    }
    .header .items{
        margin-top: 20px;
        font-size: 0px;
    }
    .header .items a:hover .zh{
        color: #41bab8;
    }
    .header .items a:hover .en{
        color:#41bab8 ;
    }
    .header .items a{
        display: inline-block;
        margin-right: 45px;
        cursor: pointer;
    }
    .header .items .zh{
        font-size:15px;
        color: #555;
    }
    .header .items .en{
        font-size: 12px;
        color: #bbbbbb;
    }
</style>