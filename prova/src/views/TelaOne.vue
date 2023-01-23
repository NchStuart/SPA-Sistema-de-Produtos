<template>
  <div>
    <Header />
    <main>
      <p class="code">{{code}}</p>

      <p class="accountant s">Seu código expira em {{ cont }} {{cont == 1 ? 'segundo' : 'segundos'}}...</p>

      <InputText class="inputText" ref="txtI" place="Digite o código de acesso"/>

      <button class="newCode s" @click="generateCode()">Enviar um novo código</button>

      <!-- <router-link to="/categorias"> -->
        <button class="btn" @click="checkCode()">Avançar</button>
      <!-- </router-link> -->
    </main>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import InputText from "@/components/InputText.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "TelaOne",
  components: {
    Header,
    InputText,
    Footer
  },
  data() {
    return {
      code: '',
      cont: 30,
    };
  },
  methods: {
    startCounting() {
      const i = window.setInterval(() => {
        if (this.cont > 1) {
          this.cont--;
        } else {
          this.generateCode();
        }
      }, 1000);
    },
    generateCode() {
      this.cont= 30;
      const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
      const generatorUpperCaseLetters = () => String.fromCharCode(rand(65, 91));
      const generatorLowerCaseLetters = () => String.fromCharCode(rand(97, 123));
      const generatorNumbers = () => String.fromCharCode(rand(48, 58));
      let newCode = [];

      for (let i = 0; i < 8; i++) {
        newCode.push(generatorUpperCaseLetters());
        newCode.push(generatorLowerCaseLetters());
        newCode.push(generatorNumbers());
      }

      this.code = newCode.join('').slice(0,8);
    },
    checkCode() {
      if (this.$refs.txtI.$data.value == this.code) {
        this.$router.push('categorias')
      } else {
        alert('Codigo incorreto, tente novamente..')
        this.generateCode();
        return;
      }
    }
  },
  computed: {
  },
  mounted() {
    this.generateCode();
    this.startCounting();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_buttons.scss";
@import "@/assets/scss/_mixins.scss";
.s {
  color: #B0B5C4;
}

.accountant{
  margin: 20px 0 40px 0;
}

.inputText {
  margin: 0 0 20px 0;
}

.newCode{
  font-size: 17px;
  margin: 0 0 50px 0;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.code {
  margin-top: 30px;
  font-size: 30px;
  color: #4A4E5D;
}

.btn {
  margin-top: 20px;
  margin-bottom: 92px;
}
</style>
