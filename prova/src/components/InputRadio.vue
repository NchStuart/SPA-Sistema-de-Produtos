<template>
  <label :for="nameInput">
    <p>{{ labelTxt }}</p>
    <input :id="nameInput"  :value="nameInput" name="radioInput" type="radio"/>
  </label>
</template>

<script>
export default {
  name: "InputText",
  data() {
    return {
      check: false,
    };
  },
  props: {
    labelTxt: {
      type: String,
    },
    nameInput: {
        type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_colors.scss";
@import "@/assets/scss/_inputs.scss";

label {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    background-color: #fff;
    transition: .2s;
    z-index: 999;
    margin-bottom: 5px;
    min-width: 500px;
    width: 100%;
    cursor: pointer;

    &:hover{
        background-color: $colorSecundary;
    }
}

p{
    margin-left: 20px;
    color: #B0B5C4;
}

input {
    position: absolute;
    right: -60px;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    user-select: none;
}

@media (max-width: 640px) {
    label {
        min-width: 300px;
    }
}
</style>