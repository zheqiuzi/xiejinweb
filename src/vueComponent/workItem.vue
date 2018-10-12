<template>

    <div class="workItem">
        <div class="img-wrap">
            <img src="../static/images/default.jpg"/>
        </div>

        <p class="title"  v-text="item.title"></p>
        <p class="subtitle">张三对王麻子说：你龟儿子张得好帅哦</p>
        <p class="date"  v-text="item.date">2018/01/01-2018/02/02</p>
    </div>

</template>

<script>
    export default {
        name: "workItem",
        props:{
            item:Object
        }
    }
</script>

<style scoped>
    *{
        padding: 0px;
        margin: 0px;
        border: 0px;
    }
    .workItem{
        width: 300px;
        display: inline-block;
        padding: 10px;
        border: 1px solid #eee;
        background: #fefefe;
        margin: 10px 0px 0px 10px;
    }
    .img-wrap{
        width: 100%;
        height: 200px;
        overflow: hidden;
    }
    img{
        width: 100%;
        display: block;
    }
    .title{
        font-size: 18px;
        color: #000;
        line-height: 25px;
        padding: 10px 0px;
    }
    .subtitle{
        font-size: 14px;
        color: #333;
        margin-bottom: 5px;
    }
    .date{
        font-size: 14px;
        color: #888;
    }
</style>