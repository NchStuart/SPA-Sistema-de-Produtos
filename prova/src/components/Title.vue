<template>
  <div>
    <h3>{{titleTxt}}</h3>
    <p>{{descTxt}}</p>
  </div>
</template>

<script>
export default {
    name: 'Title',
    props: {
        titleTxt: {
            type: String
        },
        descTxt: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
    h3 {
        text-align: center;
        color: #4A4E5D;
    }

    p{
        text-align: center;
        flex-wrap: wrap;
        margin: 0 15px 0 15px;
        color: #B0B5C4;
    }
</style>