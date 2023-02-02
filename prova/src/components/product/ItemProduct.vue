<template>
  <div class="container">
    <div class="column-l">
      <TitleProducts
        :titleTxt="titleTxt"
        :categoryTxt="categoryTxt"
        :price="price"
        :unity="unity"
      />
      <slot></slot>
    </div>
    <div class="column-r">
      <ImageProduct :src="src" :alt="alt" />
    </div>
  </div>
</template>

<script>
import TitleProducts from "./TitleProducts.vue";
import CountProduct from "./CountProduct.vue";
import ImageProduct from "./ImageProduct.vue";

export default {
  name: "ItemProduct",
  components: { TitleProducts, ImageProduct, CountProduct },
  props: {
    titleTxt: {
      type: String,
    },
    categoryTxt: {
      type: String,
    },
    price: {
      type: [String, Number],
    },
    unity: {
      type: [String, Number],
    },
    cont: {
      type: Number,
    },
    src: {
      type: String,
    },
    alt: {
      type: String,
    },
    add: {
      type: Function,
    },
    rem: {
      type: Function,
    },
  },
  data() {
    return {
      product: {
        arte: {
          productA: {
            name: "Quadro Grande",
            price: 87,
            unity: 15,
          },
          productB: {
            name: "Quadro Medio",
            price: 34,
            unity: 30,
          },
          productC: {
            name: "Quadro Pequeno",
            price: 19,
            unity: 30,
          },
          productD: {
            name: "Quadro Rustico",
            price: 12,
            unity: 30,
          },
          productE: {
            name: "Estrutura de Gelo",
            price: 1999,
            unity: 30,
          },
          productF: {
            name: "Tela Pequena",
            price: 10,
            unity: 30,
          },
          productG: {
            name: "Tela Média",
            price: 20,
            unity: 30,
          },
          productH: {
            name: "Tela Grande",
            price: 30,
            unity: 30,
          },
        },
        brinquedos: {
          productA: {
            name: "Carro",
            price: 87,
            unity: 15,
          },
          productB: {
            name: "Espantalho",
            price: 34,
            unity: 30,
          },
          productC: {
            name: "Bola",
            price: 19,
            unity: 30,
          },
          productD: {
            name: "Piscininha",
            price: 12,
            unity: 30,
          },
          productE: {
            name: "Bola de Leite",
            price: 1999,
            unity: 30,
          },
          productF: {
            name: "Lapis elastico",
            price: 10,
            unity: 30,
          },
          productG: {
            name: "Boneco",
            price: 20,
            unity: 30,
          },
          productH: {
            name: "Barbie",
            price: 30,
            unity: 30,
          },
        },
        jogos: {
          productA: {
            name: "God of War",
            price: 87,
            unity: 15,
          },
          productB: {
            name: "FIFA 23",
            price: 34,
            unity: 30,
          },
          productC: {
            name: "The Witcher",
            price: 19,
            unity: 30,
          },
          productD: {
            name: "Power Ranger",
            price: 12,
            unity: 30,
          },
          productE: {
            name: "Ben 10",
            price: 1999,
            unity: 30,
          },
          productF: {
            name: "Moranguinho",
            price: 10,
            unity: 30,
          },
          productG: {
            name: "League of Legends",
            price: 20,
            unity: 30,
          },
          productH: {
            name: "Valorant",
            price: 30,
            unity: 30,
          },
        },
        kids: {
          productA: {
            name: "Roupa Pequena",
            price: 87,
            unity: 15,
          },
          productB: {
            name: "Roupa Média",
            price: 34,
            unity: 30,
          },
          productC: {
            name: "Roupa Grande",
            price: 19,
            unity: 30,
          },
          productD: {
            name: "Roupa Listrada",
            price: 12,
            unity: 30,
          },
          productE: {
            name: "Sandalia Barbie",
            price: 1999,
            unity: 30,
          },
          productF: {
            name: "Sapato GG",
            price: 10,
            unity: 30,
          },
          productG: {
            name: "Pulseira",
            price: 20,
            unity: 30,
          },
          productH: {
            name: "Brinco",
            price: 30,
            unity: 30,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #fff;
  border-radius: 2px;
  margin: 10px 10px 10px 10px;
}
</style>