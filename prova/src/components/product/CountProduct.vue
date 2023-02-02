<template>
  <div class="container-count">
    <slot>
      <button class="add" @click="add">+</button>
      <p class="counter">{{ count }} item</p>
      <button class="rem" @click="rem">-</button>
    </slot>
  </div>
</template>

<script>
export default {
  name: "CountProduct",
  props: {
    count: {
      type: Number
    },
    add: {
      type: Function
    },
    rem: {
      type: Function
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_colors.scss";
.container-count {
  display: flex;
  align-items: center;
}

.add,.rem {
  border: none;
  background-color: $colorSecundary;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 30px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin: 5px;
  transition: .1s;
  cursor: pointer;

  &:hover { 
    background-color: #959cb1;
  }
}

.rem {
    font-size: 40px;
}

.counter {
  font-size: 15px;

}
</style>