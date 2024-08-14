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
import { api } from "@/views/services";
export default {
  name: "produtosLista",
  data() {
    return {
      produtos: null,
    };
  },
  methods: {
    getProdutos() {
      api.get("/produto").then((response) => {
        this.produtos = response.data;
      });
    },
  },
  created() {
    this.getProdutos();
  },
};
</script>

<style></style>
