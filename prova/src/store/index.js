import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    code: false,
    products: {
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
    }
  },
  getters: {
    loja: (state) => (category) => {
      let loja = state.products[category];
      let array = [];
      Object.keys(loja).forEach(v => {
        array.push(loja[v]);
      });
      return array;
    }
  },
  mutations: {
    changeStateCode: (state,bool) => {
      return state.code = bool;
    }
  },
  actions: {
    changeStateCode: (context,bool) => {
      context.commit('changeStateCode',bool);
    }
  },
  modules: {
  }
})
