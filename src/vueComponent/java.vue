<template>
    <div style="font-size: 14px;color: #000">
        <work-item v-for="item in workItems" v-bind:item="item"></work-item>
    </div>
</template>

<script>
    import WorkItem from "./workItem.vue";

    export default {
        components: {WorkItem},
        name: "java",
        data(){
            return {
                workItems:this.$store.state.java
            }
        }
    }
</script>

<style scoped>

</style>