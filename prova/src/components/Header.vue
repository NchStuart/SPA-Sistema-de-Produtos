<template>
  <header class="header">
    <slot></slot>
   </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_mixins.scss";
    @import "@/assets/scss/_colors.scss";

    .header {
        @include center-column;
        background-color: $colorSecundary;
        height: 15vh;
        width: 100%;
    }

</style>