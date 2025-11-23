<template>
  <Header />
  <section id="catalog" class="catalog py-5">
    <div class="container">

      <h2 class="text-center mb-4">Loja Virtual</h2>

      <!-- Busca -->
      <input
        v-model="searchQuery"
        type="text"
        class="form-control mb-4"
        placeholder="Pesquise por nome ou descrição"
      />

      <!-- Categorias -->
      <div class="categories mb-4">
        <h4>Categorias</h4>
        <div class="btn-group flex-wrap">
          <button
            class="btn btn-secondary"
            v-for="cat in categories"
            :key="cat"
            @click="selectedCategory = cat"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- Lista -->
      <div class="row">
        <div class="col-md-4 mb-4" v-for="item in paginatedItems" :key="item.id">
          <div class="card h-100">
            <div class="card-body d-flex flex-column">

              <h5 class="card-title">{{ item.name }}</h5>
              <p class="card-text">{{ item.description }}</p>

              <span class="badge bg-primary mb-2">{{ item.category }}</span>

              <h5 class="mt-auto">R$ {{ item.price.toFixed(2) }}</h5>

              <a :href="item.link" class="btn btn-success mt-3" target="_blank">
                Comprar
              </a>

            </div>
          </div>
        </div>
      </div>

      <!-- Paginação -->
      <nav v-if="totalPages > 1" class="mt-4">
        <ul class="pagination justify-content-center">

          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <button class="page-link" @click="previousPage">Anterior</button>
          </li>

          <li
            class="page-item"
            v-for="page in totalPages"
            :key="page"
            :class="{ active: currentPage === page }"
          >
            <button class="page-link" @click="changePage(page)">{{ page }}</button>
          </li>

          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <button class="page-link" @click="nextPage">Próxima</button>
          </li>

        </ul>
      </nav>

    </div>
  </section>
  <Footer />
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

import { ref, computed } from "vue";

export default {
  name: "Catalog",
  components: {
        Header,
        Footer
  },
  data() {
    return {
      searchQuery: "",
      selectedCategory: "Todos",
      currentPage: 1,
      itemsPerPage: 6,

      categories: ["Todos", "Softwares", "Scripts", "Plugins", "Templates"],

      items: [
        // {
        //   id: 1,
        //   name: "Produtos",
        //   category: "Softwares",
        //   description: "Gerador profissional de recibos com PDF, assinatura digital e backup.",
        //   price: 59.90,
        //   link: "#"
        // }
      ]
    };
  },

  computed: {
    filteredItems() {
      const search = this.searchQuery.toLowerCase();

      return this.items.filter(item => {
        const matchSearch =
          item.name.toLowerCase().includes(search) ||
          item.description.toLowerCase().includes(search);

        const matchCategory =
          this.selectedCategory === "Todos" ||
          item.category === this.selectedCategory;

        return matchSearch && matchCategory;
      });
    },

    totalPages() {
      return Math.ceil(this.filteredItems.length / this.itemsPerPage);
    },

    paginatedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.filteredItems.slice(start, start + this.itemsPerPage);
    }
  },

  methods: {
    changePage(page) {
      this.currentPage = page;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    previousPage() {
      if (this.currentPage > 1) this.currentPage--;
    }
  }
};
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 6px;
}

.card-body {
  display: flex;
  flex-direction: column;
}
</style>
