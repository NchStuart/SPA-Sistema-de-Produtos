<template>
  <footer class="footer">
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_colors.scss";
.footer {
  background-color: $colorSecundary;
  height: 10vh;
  width: 100%;
}
</style>