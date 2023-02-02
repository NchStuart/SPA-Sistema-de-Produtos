<template>
    <Header/>
    <router-view/>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {Header}
}
</script>

<style lang="scss">
@import "./assets/scss/_colors.scss";
@import "./assets/scss/_mixins.scss";
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

#app {
  font-family: "Roboto";
}


body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  box-sizing: border-box;
  background-color: $colorPrimary;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 70vh;
}
</style>
