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
@import "@/assets/scss/_mixins.scss";
@import "@/assets/scss/_colors.scss";
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $colorSecundary;
  width: 100%;
  height: 10vh;
}

@media (max-width: 768px) {
  .btnFooter {
    display: block;
  }

  .footer {
    height: 14vh;
  }
}
</style>