<template>
  <div id="app">
    <Header />

    <div class="max-w-6xl mx-auto px-4 py-20">
      <h2 class="text-3xl font-bold mb-6">Projetos</h2>

      <!-- Campo de busca -->
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Pesquise por nome"
        class="w-full mb-6 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <!-- Botão Apoie -->
      <!-- <div class="mb-6">
        <a href="/apoie.html"
           class="inline-block bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition">
          Apoie os Projetos
        </a>
      </div> -->

      <!-- Categorias -->
      <div class="mb-6">
        <h4 class="text-xl font-semibold mb-3">Categorias</h4>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="category in categories"
            :key="category"
            @click="filterByCategory(category)"
            :class="selectedCategory === category ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'"
            class="px-4 py-2 rounded-xl font-medium hover:bg-indigo-500 hover:text-white transition"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <!-- Nenhum encontrado -->
      <div v-if="paginatedSoftwares.length === 0"
           class="bg-yellow-100 text-yellow-800 px-4 py-3 rounded-xl mb-6">
        Nenhum software ou biblioteca encontrado(a).
      </div>

      <!-- Listagem -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        <div v-for="software in paginatedSoftwares" :key="software.id"
             class="border rounded-2xl shadow hover:shadow-lg transition p-5 flex flex-col justify-between">
          <div>
            <h5 class="text-lg font-semibold mb-2">{{ software.name }}</h5>
            <p class="text-gray-600 mb-4">{{ software.description }}</p>
          </div>
          <a :href="software.link" target="_blank"
             class="mt-auto inline-block bg-indigo-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-indigo-700 transition text-center">
            Ver mais
          </a>
        </div>
      </div>

      <!-- Paginação -->
      <div v-if="totalPages > 1" class="flex justify-center space-x-2 mt-6">
        <!-- Anterior -->
        <button
          @click="currentPage--"
          :disabled="currentPage === 1"
          class="px-3 py-1 rounded-xl border transition disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-100"
        >
          Anterior
        </button>

        <!-- Números -->
        <button
          v-for="page in totalPages"
          :key="page"
          @click="currentPage = page"
          :class="page === currentPage ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'"
          class="px-3 py-1 rounded-xl font-medium hover:bg-indigo-500 hover:text-white transition"
        >
          {{ page }}
        </button>

        <!-- Próximo -->
        <button
          @click="currentPage++"
          :disabled="currentPage === totalPages"
          class="px-3 py-1 rounded-xl border transition disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-100"
        >
          Próximo
        </button>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  name: "Projetos",
  components: { Header, Footer },

  data() {
    return {
      searchQuery: "",
      selectedCategory: "Todos",
      currentPage: 1,
      itemsPerPage: 9,

      categories: ["Todos", "Empresarial", "Desenvolvimento", "Gráficos", "Multimídia", "Utilitários", "Bibliotecas"],

      softwares: [
        // { id: 1,  name: "MiPhant", category: "Desenvolvimento", description: "Desenvolva softwares para desktop com MiPhant", link: "https://github.com/mugomes/miphant" },
        // { id: 2,  name: "MiPhantLibs", category: "Bibliotecas", description: "Mais de 30 funcionalidades para MiPhant", link: "https://github.com/mugomes/miphantlibs" },
        // { id: 3,  name: "MiAntivirus", category: "Utilitários", description: "Verifique seu computador em busca de vírus.", link: "https://github.com/mugomes/miantivirus" },
        // // ... restante dos softwares
      ],
    };
  },

  computed: {
    filteredSoftwares() {
      const search = this.searchQuery.toLowerCase();
      return this.softwares.filter(software => {
        const matchesSearch = software.name.toLowerCase().includes(search);
        const matchesCategory =
          this.selectedCategory === "Todos" ||
          software.category === this.selectedCategory;
        return matchesSearch && matchesCategory;
      }).sort((a, b) => b.id - a.id);
    },

    totalPages() {
      return Math.ceil(this.filteredSoftwares.length / this.itemsPerPage);
    },

    paginatedSoftwares() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.filteredSoftwares.slice(start, start + this.itemsPerPage);
    }
  },

  methods: {
    filterByCategory(category) {
      this.selectedCategory = category;
      this.currentPage = 1;
    }
  }
};
</script>
