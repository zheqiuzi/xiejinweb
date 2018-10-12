<template>

    <div class="workItem">
        <div class="img-wrap">
            <img src="../static/images/default.jpg"/>
        </div>

        <p class="title">村主任的花</p>
        <p class="subtitle">张三对王麻子说：你龟儿子张得好帅哦</p>
        <p class="date">2018/01/01-2018/02/02</p>
    </div>

    <div class="workItem">
       <img>
        <p class="title">标题</p>
        <p class="date">subtitle</p>

    </div>
</template>

<script>
    export default {
        name: "workItem"
    }
</script>

<style lang="less" scoped>
    .workItem{
        width: 300px;
        height: 200px;
        display: block;
        .title{
            font-size: 16px;
        }
        .date{
            font-size: 14px;
        }
    }
</style>