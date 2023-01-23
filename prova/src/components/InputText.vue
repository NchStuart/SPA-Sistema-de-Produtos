<template>
    <input type="text" v-model="value" :placeholder="place">
</template>

<script>
export default {
    name: "InputText",
    data() {
        return {
            value: ''
        }
    },
    props: {
        place:{
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_inputs.scss";

</style>