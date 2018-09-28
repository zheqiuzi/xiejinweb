<template>
    <div class="workItem">
       <img>
        <p class="title" v-text="item.title">--</p>
        <p class="date" v-text="item.date">--</p>

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
    .workItem{
        width: 300px;
        height: 200px;
        display: block;

    }
    .title{
        font-size: 16px;
    }
    .date{
        font-size: 14px;
    }
</style>