<template>
  <div class="app">
    <Header />
    <div class="container mt-5">
      <h2>Catálogo de Softwares</h2>
      <input v-model="searchQuery" type="text" class="form-control mb-4"
        placeholder="Pesquise por nome do software..." />

      <div class="categories">
        <h4>Categorias</h4>
        <div class="btn-group mb-4">
          <button class="btn btn-secondary" v-for="category in categories" :key="category"
            @click="filterByCategory(category)">
            {{ category }}
          </button>
        </div>
      </div>

      <div v-if="filteredSoftwares.length === 0" class="alert alert-warning">
        Nenhum software ou biblioteca encontrado(a).
      </div>

      <div class="row">
        <div class="col-md-4 mb-4" v-for="software in filteredSoftwares" :key="software.id">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ software.name }}</h5>
              <p class="card-text">{{ software.description }}</p>
              <a :href="software.link" class="btn btn-primary" target="_blank">Ver mais</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

import { ref, computed } from "vue";

export default {
  name: "Catalogo",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      searchQuery: "",
      selectedCategory: "Todos",
      categories: ["Todos", "Desenvolvimento", "Utilitários", "Bibliotecas"],
      softwares: [
        {
          id: 1,
          name: "MiPhant",
          category: "Desenvolvimento",
          description: "Desenvolva softwares para desktop com MiPhant",
          link: "https://github.com/mugomes/miphant"
        },
        {
          id: 2,
          name: "MiPhantLibs",
          category: "Bibliotecas",
          description: "Mais de 30 funcionalidades para você trabalhar com MiPhant",
          link: "https://github.com/mugomes/miphantlibs"
        },
        {
          id: 3,
          name: "MiAntivirus",
          category: "Utilitários",
          description: "Verifique seu computador em busca de virus.",
          link: "https://github.com/mugomes/miantivirus"
        },
        {
          id: 4,
          name: "MiCheckHash",
          category: "Utilitários",
          description: "Verifique e gere hash de arquivos.",
          link: "https://github.com/mugomes/micheckhash"
        },
        {
          id: 5,
          name: "MiConvertImage",
          category: "Utilitários",
          description: "Converta imagens em webp, jpg e png.",
          link: "https://github.com/mugomes/miconvertimage"
        },
        {
          id: 6,
          name: "MiRemovePendrive",
          category: "Utilitários",
          description: "Obtenha informações de espaço e remova pendrive com segurança.",
          link: "https://github.com/mugomes/miremovependrive"
        },
        {
          id: 7,
          name: "MiCheckExif",
          category: "Utilitários",
          description: "Visualize e remova dados exif de imagens.",
          link: "https://github.com/mugomes/micheckexif"
        },
        {
          id: 8,
          name: "MiPhantTPL",
          category: "Bibliotecas",
          description: "Gere HTML de forma dinâmica com PHP.",
          link: "https://github.com/mugomes/miphanttpl"
        },
        {
          id: 9,
          name: "MiPhantDB",
          category: "Bibliotecas",
          description: "Crie tabelas e consulte, adicione, altere e remova registros de banco de dados MariaDB.",
          link: "https://github.com/mugomes/miphantdb"
        },
        {
          id: 10,
          name: "MiPhantRoute",
          category: "Bibliotecas",
          description: "Trabalhe com rotas de uma forma rápida e fácil.",
          link: "https://github.com/mugomes/miphantroute"
        },
      ],
    };
  },
  computed: {
    filteredSoftwares() {
      const searchQueryLower = this.searchQuery.toLowerCase();
      return this.softwares.filter(software => {
        const matchesSearch = software.name.toLowerCase().includes(searchQueryLower);
        const matchesCategory = this.selectedCategory === "Todos" || software.category === this.selectedCategory;
        return matchesSearch && matchesCategory;
      });
    },
  },
  methods: {
    filterByCategory(category) {
      this.selectedCategory = category;
    },
  },
};
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 5px;
}

.card-body {
  padding: 15px;
}

.categories {
  margin-bottom: 20px;
}
</style>
