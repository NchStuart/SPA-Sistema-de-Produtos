<template>
  <main class="container">
    <Title
      titleTxt="Escolha a Categoria"
      descTxt="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ea aperiam perspiciatis obcaecati vitae a ratione voluptatibus, mollitia quae impedit."
    />
    <div class="radio-container">
      <InputRadio nameInput="inputRadioArte" labelTxt="Arte" />
      <InputRadio nameInput="inputRadioBrinquedos" labelTxt="Brinquedos" />
      <InputRadio nameInput="inputRadioJogos" labelTxt="Jogos" />
      <InputRadio nameInput="inputRadioKids" labelTxt="Kids" />
    </div>

    <Button class="btn" txt="Avançar" @click="skipPage()" />
  </main>
      <Footer>
      <Button class="btnFooter" txt="Avançar" @click="skipPage()"/>
    </Footer>
</template>

<script>
import Title from "@/components/Title.vue";
import InputRadio from "@/components/InputRadio.vue";
import Button from "@/components/Button.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "TelaTwo",
  components: { Footer, Title, InputRadio, Button },
  data() {
    return {};
  },
  methods: {
    skipPage() {
      const input = document.querySelectorAll("input");
      const p = document.querySelectorAll("label p");
      localStorage.clear();

      input.forEach((v) => {
        if (v.checked == true) {
          const dad = v.parentNode;
          const son = dad.children[0].innerHTML;
          p.forEach((e) => {
            localStorage.setItem("categorias", son.toLowerCase());
          });

          this.$router.push("produtos");
        }
      });
    },
  },
  mounted() {
    if (this.$store.state.code == false) {
      this.$router.push('/');
    }
  }
};
</script>
  
<style lang="scss" scoped>
@import "@/assets/scss/_mixins.scss";

.container {
  margin-top: 10px;
}

.radio-container {
  margin-top: 40px;
  margin-bottom: 40px;
}

.btn {
  display: block;
  margin-bottom: 55px;
}

.btnFooter {
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

  .footer {
    margin-top: 30px;
  }
}
</style>
