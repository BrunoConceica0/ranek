<template>
  <section class="produtos-container">
    <div>
      <ul>
        <li v-for="produto in produtos" :key="produto.id">
          <img
            v-if="produto.foto"
            :src="produto.foto[0].scr"
            :alt="produto.foto[0].titulo"
          />
          <p class="produto_preco">{{ produto.preco }}</p>
          <h2 class="produto_nome">{{ produto.nome }}</h2>
          <p>{{ produto.descricao }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      produtos: null,
    };
  },
  methods: {
    getProdutos() {
      fetch("http://localhost:3000/produto").then((response) =>
        response.json().then((data) => {
          this.produtos = data;
        })
      );
    },
  },
  created() {
    this.getProdutos();
  },
  name: "produtosLista",
};
</script>

<style></style>
http://localhost:3000/produto
