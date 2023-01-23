<template>
    <router-view/>
</template>

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
  background-color: $colorPrimary;
}

main {
  @include center-column;
}
</style>
