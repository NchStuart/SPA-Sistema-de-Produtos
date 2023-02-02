<template>
    <main class="container">
      <p class="code">{{code}}</p>

      <p class="accountant s">Seu código expira em {{ cont }} {{cont == 1 ? 'segundo' : 'segundos'}}...</p>

      <InputText class="inputText" ref="txtI" place="Digite o código de acesso"/>

      <button class="newCode s" @click="generateCode()">Enviar um novo código</button>

      <Button class="btn" txt="Avançar" @click="checkCode()"/>
    </main>
    <Footer>
      <Button class="btnFooter" txt="Avançar" @click="checkCode()"/>
    </Footer>
</template>

<script>
import Header from "@/components/Header.vue";
import InputText from "@/components/InputText.vue";
import Button from "@/components/Button.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "TelaOne",
  components: {
    Header,
    InputText,
    Footer,
    Button
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
        this.$store.dispatch('changeStateCode',true);
        this.$router.push('categorias')
      } else {
        alert('Código incorreto, tente novamente...')
        this.generateCode();
        this.$refs.txtI.value = '';
        return;
      }
    }
  },
  mounted() {
    this.generateCode();
    this.startCounting();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_mixins.scss";


.container {
  margin-top: 62px;
}

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
  user-select: none;
}

.btn {
  margin-top: 20px;
  margin-bottom: 50px;
}

.btnFooter{
  display: none;
}

@media (max-width: 768px) {
  .btn{
    display: none;
      margin-bottom: 0px;
      margin-top: 0px;
  }
  .btnFooter {
    display: block;
  }
}
</style>
