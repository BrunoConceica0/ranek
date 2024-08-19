<template>
  <section class="produtos-container">
    <div>
      <ul>
        <li v-for="produto in produtos" :key="produto.id">
          <img
            v-if="produto.foto"
            :src="produto.foto[0].src"
            :alt="produto.foto[0].titulo"
          />
          <p class="produto_preco">{{ produto.preco }}</p>
          <h2 class="produto_nome">{{ produto.nome }}</h2>
          <p>{{ produto.descricao }}</p>
        </li>
      </ul>
    </div>
    {{ url }}
  </section>
</template>

<script>
import { api } from "@/views/services";
import rerialize from "@/helpers";
export default {
  name: "produtosLista",
  data() {
    return {
      produtos: null,
      produtosPorPagina: 9,
    };
  },
  computed: {
    url() {
      const query = rerialize(this.$route.query);
      return `/produto?_limit=${this.produtosPorPagina}${query}`;
    },
  },

  methods: {
    getProdutos() {
      api.get(this.url).then((response) => {
        this.produtos = response.data;
      });
    },
  },
  watch: {
    url() {
      this.getProdutos();
    },
  },
  created() {
    this.getProdutos();
  },
};
</script>

<style></style>
