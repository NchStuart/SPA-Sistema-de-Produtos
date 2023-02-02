<template>
  <div>
    <p class="category">{{categoryTxt}}</p>
    <h3 class="title">{{titleTxt}}</h3>
    <div class="container-price">
        <p class="price">R$ <span>{{price}}</span></p>
        <span class="unity">({{unity}})</span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'TitleProducts',
    props: {
        titleTxt: {
            type: String
        },
        categoryTxt: {
            type: String
        },
        price: {
            type: [String,Number]
        },
        unity: {
            type: [String,Number]
        }
    }
}
</script>

<style lang="scss" scoped>
div {
    margin-left: 20px;
}
    h3 {
        line-height: 5px;
        color: #4A4E5D;
        font-size: 16px;
    }

    p{
        line-height: 10px;
        color: #B0B5C4;
        font-size: 15px;
    }

    .container-price{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: -30px;
    }


    .category {

        &::first-letter {
            text-transform: uppercase;
        }
    }

    span {
        margin-left: 5px;
    }
</style>