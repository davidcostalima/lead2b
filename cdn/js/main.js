import TablePrice from "./module/TablePrice.js";
import WhatsApp from "./module/Whats.js";
import SendBlue from "./module/sendBlue.js";
import BoxPrice from "./module/BoxPrice.js";
import Temp from "./module/Temp.js";
import Steps from "./module/Steps.js";
import Prod from "./module/product.js";
import inputForm from "./module/form.js";
import month from "./module/month.js";
import btns from "./module/btns.js";
import form from "./module/form.js";

const table_price = new TablePrice();
const whats = new WhatsApp();
const box_price = new BoxPrice();
const blue = new SendBlue();
const temp = new Temp();

Vue.createApp({
  data() {
    return {
      openBag: false,
      btns,
      month,
      inputForm,
      Prod,
      step: 0,
      steps: Steps,
      totalStep: 0,
      total: 0,
      onNext: true,
      cubagem: [],
      metros: 0,
      allbox: box_price.get_all_Price(),
      form: {
        size: "PP",
        nome: null,
        sobreNome: null,
        telefone: null,
        email: null,
        locacao: null,
        pulou: null,
        exato: null,
        guard: null,
        contato: null,
        product: {},
        itens: {},
      },
      cart: {},
    };
  },
  methods: {
    newLead() {
      var produtos = Object.keys(this.form.product)
        .map((k) => `<li>${Prod[k].title} : ${this.form.product[k]}</li>`)
        .join("");
      let content = `
                <div>
                  Tamanho: ${this.form.size} <br/>
                  Nome: ${this.form.nome} <br/>
                  Sobrenome: ${this.form.sobreNome} <br/>
                  Telefone: ${this.form.telefone} <br/>
                  Email: ${this.form.email} <br/>
                  Itens: <br/>
                    ${produtos}
              </div>
              `;
      blue.send("Davi", "david@oicaribe.com.br", "Novo Lead", content);
      blue.send("Ruan Gustavo", "ruangustavo@gmail.com", "Novo Lead", content);
    },
    autosave() {
      temp.save({
        nome: this.form.nome,
        sobreNome: this.form.sobreNome,
        telefone: this.form.telefone,
        email: this.form.email,
        step: this.step,
        form: this.form,
      });
    },
    mascaraNumber(e) {
      e.target.value = (e.target.value + "A").replace(/\D/gi, "");
      this.autosave();
    },
    set_data_pages() {
      temp.save({
        nome: this.form.nome,
        sobreNome: this.form.sobreNome,
        telefone: this.form.telefone,
        email: this.form.email,
      });
    },
    setData(key, value) {
      this.form[key] = value;
    },
    key() {
      return 1;
    },
    back(tipo = "zero") {
      this.step--;
      this.save();
      this.$refs.jsBtnPrev.click();
      if (tipo != "zero") {
        let atualStep = Array.from(this.cubagem).map((_) => ({ ..._ }));
        let nowType = atualStep[this.step - 6]?.tipo || "zero";
        this.step = this.step + this.jump[nowType];
      }
      if (this.form.guard == "empresa" && this.step != 22 && this.step != 23) {
        this.step = 5;
      }
    },
    finish() {
      this.step = 1;
    },
    async next(jump = 1) {
      this.step = this.step + jump;
    },
    isNext() {
      this.onNext = false;
    },

    save() {},
    forcerSubmit() {
      this.$refs.info.click();
    },
    handleCalc() {
      let total = this.steps.reduce((acc, e) => {
        acc = [...acc, ...e.fields.map((f) => f.quant * f.size)];
        return acc;
      }, []);
      this.total = total.reduce((acc, v) => acc + v, 0);
    },
    calcularM3() {
      this.metros = this.cubagem
        .reduce((acc, e) => {
          const subTotal = e.fields.map((c) => c.value * c.size);
          const total = subTotal.reduce((a, v) => a + v, 0);
          return acc + total;
        }, 0)
        .toFixed(2);

      this.form.itens = this.cubagem
        .reduce((acc, e) => {
          return [...acc, ...e.fields];
        }, [])
        .filter((e) => e.value)
        .map((e) => ` ${e.value}-${e.title}`)
        .join(",");
    },
    dataPrint() {
      let now = new Date();
      return (
        "Hoje é " +
        (now.getDate() + "").padStart(2, "0") +
        "/" +
        (now.getMonth() + 1 + "").padStart(2, "0") +
        "/" +
        now.getFullYear()
      );
    },
    valorReal() {
      return table_price.valor(this.calc());
    },
    metrosReal() {
      return table_price.metros(this.calc());
    },
    whats() {
      whats.send("Olá");
    },
    getParams(name) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      return urlParams.get(name);
    },
    sendBlue() {
      var produtos = Object.keys(this.form.product)
        .map((k) => `<li>${Prod[k].title} : ${this.form.product[k]}</li>`)
        .join("");
      let content = `
                <div>
                    Tamanho: ${this.form.size} <br/>
                    Nome: ${this.form.nome} <br/>
                    Sobrenome: ${this.form.sobreNome} <br/>
                    Telefone: ${this.form.telefone} <br/>
                    Email: ${this.form.email} <br/>
                    Metragem: ${this.metrosReal()}m³ <br/>
                    Preço: R$ ${this.valorReal()} <br/>
                    Itens: <br/>
                    ${produtos}
                </div>
                `;

      blue.send(
        "Davi",
        "david@oicaribe.com.br",
        "Novo Cadastro de Interesse I MetroMax Self Storage",
        content
      );

      blue.send(
        "Ruan Gustavo",
        "ruangustavo@gmail.com",
        "Novo Cadastro de Interesse I MetroMax Self Storage",
        content
      );
    },
    calc() {
      let itens = [];
      let total = 0;
      Object.keys(this.form.product).forEach((i) => {
        itens.push({
          id: i,
          quant: this.form.product[i],
          cubic: Prod[i].cubico,
          subTot: this.form.product[i] * Prod[i].cubico,
        });
        total += +this.form.product[i] * +Prod[i].cubico;
      });
      return total.toFixed(2);
    },
  },
  mounted() {
    const totalStep = this.steps.length + 6;
    this.totalStep = Array(totalStep).fill(Math.random());
    this.calcularM3();
    var guard = temp.info();

    this.form = { ...this.form, ...guard.form };
  },
}).mount("#js-app");
