<template>
  <main>
    <h2>RESUMO DA COMPRA</h2>
    <div class="container-item">
      <div class="item" v-for="item in infoItem" :key="item">
        <ItemProduct
          :titleTxt="item.name"
          :price="item.price.toFixed(2)"
          unity="x"
        >
          <p class="unity-second">
            {{ item.qtd }} {{ item.qtd > 1 ? "Unidades" : "Unidade" }}
          </p>
        </ItemProduct>
      </div>
    </div>
    <div class="container-total--desktop">
      <p>Total: R$ {{ total.toFixed(2) }}</p>
    </div>
  </main>
  <Footer>
    <div class="container-total--mobile">
      <p>Total: R$ {{ total.toFixed(2) }}</p>
    </div>
  </Footer>
</template>

<script>
import ItemProduct from "@/components/product/ItemProduct.vue";
import Button from "@/components/Button.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "TelaFor",
  components: {
    Footer,
    Button,
    ItemProduct,
  },
  data() {
    return {
      category: localStorage.getItem("categorias"),
      total: +localStorage.getItem("valueTotal"),
    };
  },
  methods: {},
  computed: {
    getProducts() {
      return this.$store.state.products[this.category];
    },
    infoItem() {
      const ls = localStorage.getItem("itemName");
      const obj = JSON.parse(ls);
      let array = [];

      for (let a of obj) {
        array.push(a);
      }

      return array;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_mixins.scss";
@import "@/assets/scss/_colors.scss";

main {
  padding-bottom: 70px;
}
.container-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 100px;
}
.item {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 400px;
  min-width: 300px;
  margin-top: 10px;
}
.unity {
  display: none;
}

.unity-second {
  font-size: 14px;
  margin-left: 70px;
  margin-top: 25px;
  color: #959cb1;
}

.container-total--desktop {
  position: absolute;
  bottom: 0;

  & P {
    font-size: 20px;
  }
}

.container-total--mobile {
  display: none;
}

.btnFooter {
  display: none;
}

@media (max-width: 820px) {
  .container-total--mobile {
    display: block;
    z-index: 999;
  }

  .container-total--desktop {
    display: none;
  }

  .footer {
    flex-direction: column;
    position: fixed;
    bottom: 0;
    height: 22vh;
    background: #fff;
  }
}
</style>