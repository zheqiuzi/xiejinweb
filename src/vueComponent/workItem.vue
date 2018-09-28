<template>
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