<template>
  <div>
    <form action="">
      <input name="busca" id="busca" type="text" v-model="busca" />
      <input
        type="submit"
        id="lupa"
        value="Buscar"
        @click.prevent="buscarProdutos"
      />
    </form>
    {{ busca }}
  </div>
</template>

<script>
export default {
  name: "produtosBuscar",
  data() {
    return {
      busca: null,
    };
  },
  methods: {
    buscarProdutos() {
      this.$router.push({ query: { q: this.busca } });
    },
  },
};
</script>

<style></style>
