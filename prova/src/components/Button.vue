<template>
  <button class="btn">{{txt}}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        txt: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_buttons.scss";

@media (max-width: 768px) {
  .btn {
    text-transform: uppercase;
    font-size: 15px;
    width: 100%;
    height: 100%;
    border-radius: 0px;
    background:none;

    &:hover {
      background: none;
          transform: none;
    }
  }
}


</style>