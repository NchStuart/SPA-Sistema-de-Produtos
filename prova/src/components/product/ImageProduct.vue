<template>
  <div>
    <img src="../../assets/img.png" :alt="alt">
  </div>
</template>

<script>
export default {
    name: 'ImageProduct',
    props: {
      src: {
        type: String,
        default: "../../assets/img.png"
      },
      alt: {
        type: String
      }
    }
}
</script>

<style lang="scss" scoped>
  img {
    padding: 10px;
  }
</style>