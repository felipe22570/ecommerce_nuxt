<template>
  <main>
    <h1>The best products at the best price!</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else class="category-list">
      <nuxt-link
        :to="'/categories/' + category.id"
        class="category"
        v-for="category of categories"
        :key="category.id"
      >
        <img :src="category.image" alt="" />
        <div class="span">{{ category.name }}</div>
      </nuxt-link>
    </div>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      categories: "categories/getCategories",
      isLoading: "categories/getIsLoading",
    }),
  },
  methods: {
    ...mapActions({
      fetchCategories: "categories/fetchCategories",
    }),
  },
  mounted() {
    this.fetchCategories();
  },
};
</script>

<style lang="scss" scoped>
main {
  width: 70%;
  margin: 3rem auto;
  text-align: center;
}

.category-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin: 3rem auto;

  .category {
    width: auto;
    border-radius: 15px;
    box-shadow: 0px 0px 60px -3px rgba(0, 0, 0, 0.1);
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    text-decoration: none;
    color: inherit;

    &:hover {
      transform: scale(1.1);
    }

    img {
      width: 100%;
      object-fit: cover;
    }

    .span {
      padding: 1.5rem;
    }
  }
}
</style>