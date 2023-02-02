<template>
  <main>
    <div class="container-item">
      <div class="item" v-for="item in getProducts" :key="item">
        <ItemProduct
          :titleTxt="item.name"
          :categoryTxt="category"
          :price="item.price.toFixed(2)"
          :unity="item.unity"
          ref="product"
        >
          <div class="container-count">
            <button class="add" @click="addValue">+</button>
            <p :class="`counter id${item.id}`"><span>0</span> item</p>
            <button class="rem" @click="remValue">-</button>
          </div>
        </ItemProduct>
      </div>
    </div>
    <div class="container-total--desktop">
      <p>Total: R$ {{ total.toFixed(2) }}</p>
    </div>

    <Button class="btnBuy" txt="Comprar" @click="savePurchase()" />
  </main>
  <Footer>
    <div class="container-total--mobile">
      <p>Total: R$ {{ total }}</p>
    </div>
    <Button class="btnFooter" txt="Comprar" @click="savePurchase()" />
  </Footer>
</template>

<script>
import ItemProduct from "@/components/product/ItemProduct.vue";
import Button from "@/components/Button.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "TelaThree",
  components: { Footer, ItemProduct, Button },
  data() {
    return {
      category: localStorage.getItem("categorias"),
      total: 0.0,
      count: 0
    };
  },
  computed: {
    getProducts() {
      return this.$store.getters.loja(this.category);
    }
  },
  methods: {
    addValue(e) {
      const el = e.target;
      const dadprovisional = el.parentNode;
      const dad = dadprovisional.parentNode;
      const price = Number(dad.querySelector(".price span").innerHTML);
      const qtd = dad.querySelector(".counter span");
      if (qtd.innerHTML < 20) {
        this.total = this.total + price;
        +qtd.innerHTML++;
      }
    },
    remValue(e) {
      const el = e.target;
      const dadprovisional = el.parentNode;
      const dad = dadprovisional.parentNode;
      const price = Number(dad.querySelector(".price span").innerHTML);
      const qtd = dad.querySelector(".counter span");
      if (qtd.innerHTML > 0) {
        this.total = this.total - price;
        +qtd.innerHTML--;
      }
    },
    savePurchase() {
      const itemList = document.querySelectorAll(".counter span");
      const array = [];
      itemList.forEach((v) => {
        if (+v.innerHTML > 0) {
          const dadprovisional = v.parentNode;
          const dad = dadprovisional.parentNode;
          const itemName = dad.parentNode.querySelectorAll(".title");
          const itemPrice = dad.parentNode.querySelectorAll(".price span");
          const itemQtd = dad.parentNode.querySelectorAll(".counter span");
          itemName.forEach((vName, index) => {
            itemQtd.forEach((vQtd) => {
              itemPrice.forEach((vPrice) => {
                array.push({
                  name: vName.innerHTML,
                  price: +vQtd.innerHTML * +vPrice.innerHTML,
                  qtd: +vQtd.innerHTML,
                });
              });
            });
            if (this.total > 0) {
              const textJSON = JSON.stringify(array);
              localStorage.setItem("itemName", textJSON);
              localStorage.setItem("valueTotal", this.total);
              localStorage.setItem("categorias", this.category)
              this.$router.push('purchase-summary');
            }
          });
        }
      });
    },
  },
  mounted() {
    
  },
};
</script>


<style lang="scss" scoped>
@import "@/assets/scss/_mixins.scss";
@import "@/assets/scss/_colors.scss";

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.container-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 120px;
}

.container-total--desktop {
  position: absolute;
  bottom: 0;
  margin-bottom: 60px;

  & P {
    font-size: 20px;
  }
}

.item {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 400px;
  min-width: 300px;
  margin-top: 10px;
}
.btnFooter {
  display: none;
}

.btnBuy {
  display: block;
  margin-bottom: 20px;
  height: 50px;
}

.container-total--mobile {
  display: none;
}

.container-count {
  display: flex;
  align-items: center;
  padding: 10px;
}

.add,
.rem {
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
  transition: 0.1s;
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

  .btnFooter {
    display: block;
    color: #fff;
    background-color: $colorSecundary;
    border: none;
    padding: 15px;
    border-radius: 10px;
    width: 95%;
    height: 50px;
    cursor: pointer;
    transition: 0.1s;

    &:hover {
      transform: scale(1.01);
      background-color: #7182af;
    }
  }
}
</style>