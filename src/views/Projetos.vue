<template>
  <div class="app">
    <Header />

    <div class="container mt-5">
      <h2>Projetos</h2>

      <!-- Campo de busca -->
      <input
        v-model="searchQuery"
        type="text"
        class="form-control mb-4"
        placeholder="Pesquise por nome"
      />

      <div class="mt-3 mb-4">
        <a href="/apoie.html" class="btn btn-success">Apoie os Projetos</a>
      </div>

      <!-- Categorias -->
      <div class="categories">
        <h4>Categorias</h4>
        <div class="btn-group flex-wrap mb-4">
          <button
            class="btn btn-secondary"
            v-for="category in categories"
            :key="category"
            @click="filterByCategory(category)"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <!-- Nenhum encontrado -->
      <div v-if="paginatedSoftwares.length === 0" class="alert alert-warning">
        Nenhum software ou biblioteca encontrado(a).
      </div>

      <!-- Listagem -->
      <div class="row">
        <div class="col-md-4 mb-4" v-for="software in paginatedSoftwares" :key="software.id">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ software.name }}</h5>
              <p class="card-text">{{ software.description }}</p>
              <a :href="software.link" class="btn btn-primary" target="_blank">Ver mais</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Paginação -->
      <nav class="mt-4" v-if="totalPages > 1">
        <ul class="pagination justify-content-center">

          <!-- Anterior -->
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <button class="page-link" @click="currentPage--" :disabled="currentPage === 1">
              Anterior
            </button>
          </li>

          <!-- Botões numerados -->
          <li
            class="page-item"
            v-for="page in totalPages"
            :key="page"
            :class="{ active: page === currentPage }"
          >
            <button class="page-link" @click="currentPage = page">
              {{ page }}
            </button>
          </li>

          <!-- Próximo -->
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <button class="page-link" @click="currentPage++" :disabled="currentPage === totalPages">
              Próximo
            </button>
          </li>
        </ul>
      </nav>

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
        { id: 1,  name: "MiPhant", category: "Desenvolvimento", description: "Desenvolva softwares para desktop com MiPhant", link: "https://github.com/mugomes/miphant" },
        { id: 2,  name: "MiPhantLibs", category: "Bibliotecas", description: "Mais de 30 funcionalidades para MiPhant", link: "https://github.com/mugomes/miphantlibs" },
        { id: 3,  name: "MiAntivirus", category: "Utilitários", description: "Verifique seu computador em busca de vírus.", link: "https://github.com/mugomes/miantivirus" },
        { id: 4,  name: "MiCheckHash", category: "Utilitários", description: "Verifique e gere hash de arquivos.", link: "https://github.com/mugomes/micheckhash" },
        { id: 5,  name: "MiConvertImage", category: "Gráficos", description: "Converta imagens em webp, jpg e png.", link: "https://github.com/mugomes/miconvertimage" },
        { id: 6,  name: "MiRemovePendrive", category: "Utilitários", description: "Informações de espaço e remoção segura de pendrive.", link: "https://github.com/mugomes/miremovependrive" },
        { id: 7,  name: "MiCheckExif", category: "Gráficos", description: "Visualize e remova dados EXIF de imagens.", link: "https://github.com/mugomes/micheckexif" },
        { id: 8,  name: "MiPhantTPL", category: "Bibliotecas", description: "Gere HTML dinâmico com PHP.", link: "https://github.com/mugomes/miphanttpl" },
        { id: 9,  name: "MiPhantDB", category: "Bibliotecas", description: "Manipule banco MariaDB facilmente.", link: "https://github.com/mugomes/miphantdb" },
        { id: 10, name: "MiPhantRoute", category: "Bibliotecas", description: "Rotas rápidas e simples no PHP.", link: "https://github.com/mugomes/miphantroute" },
        { id: 11, name: "MiNJSInstall", category: "Desenvolvimento", description: "Instalação e remoção fácil de Node/NVM.", link: "https://github.com/mugomes/minjsinstall" },
        { id: 12, name: "MiGitTool", category: "Desenvolvimento", description: "Importe repositórios GitHub facilmente.", link: "https://github.com/mugomes/migittool" },
        { id: 13, name: "MiRecibo", category: "Empresarial", description: "Gerencie recibos com valor por extenso.", link: "https://github.com/mugomes/mirecibo" },
        { id: 14, name: "MiSSL", category: "Desenvolvimento", description: "Crie certificados SSL para Apache.", link: "https://github.com/mugomes/missl" },
        { id: 15, name: "MiNota", category: "Utilitários", description: "Editor de texto em HTML.", link: "https://github.com/mugomes/minota" },
        { id: 16, name: "MiProtocolo", category: "Empresarial", description: "Crie e gerencie protocolos.", link: "https://github.com/mugomes/miprotocolo" },
        { id: 17, name: "MiTranslate", category: "Utilitários", description: "Tradução de textos.", link: "https://github.com/mugomes/mitranslate" },
        { id: 18, name: "MiKeyGenerator", category: "Desenvolvimento", description: "Gere chaves para ativação.", link: "https://github.com/mugomes/mikeygenerator" },
        { id: 19, name: "MiAutoStart", category: "Utilitários", description: "Gerencie programas de inicialização.", link: "https://github.com/mugomes/miautostart" },
        { id: 20, name: "MiPhantDBLite", category: "Bibliotecas", description: "Manipule banco SQLite3 facilmente.", link: "https://github.com/mugomes/miphantdblite" },
        { id: 21, name: "MGTOON", category: "Bibliotecas", description: "Token-Oriented Object Notation para PHP.", link: "https://github.com/mugomes/mgtoon" },
        { id: 22, name: "MGColumnView", category: "Bibliotecas", description: "Tabela customizada para Fyne.", link: "https://github.com/mugomes/mgcolumnview" },
        { id: 23, name: "MGDialogBox", category: "Bibliotecas", description: "Componentes avançados de diálogo para Fyne.", link: "https://github.com/mugomes/mgdialogbox" },
        { id: 24, name: "MGNumericEntry", category: "Bibliotecas", description: "Entrada numérica para Fyne.", link: "https://github.com/mugomes/mgnumericentry" },
        { id: 25, name: "MGMicServer", category: "Multimídia", description: "Com MGMicServer você pode usar o microfone do seu computador principal e enviar o áudio sem ruído e chiados para o seu computador secundário.", link: "https://github.com/mugomes/mgmicserver" },
        { id: 26, name: "MGLang", category: "Bibliotecas", description: "MGLang é um componente que detecta e retorna o código base do idioma do sistema operacional.", link: "https://github.com/mugomes/mglang" },
        { id: 27, name: "MGSettings", category: "Bibliotecas", description: "MGSettings é um componente para adicionar e consultar configurações em JSON.", link: "https://github.com/mugomes/mgsettings" },
        { id: 28, name: "MGRun", category: "Bibliotecas", description: "MGRun é um wrapper leve em Go para exec que simplifica a execução de comandos do shell com suporte nativo a callbacks em tempo real para as saídas de sistema.", link: "https://github.com/mugomes/mgrun" },
        { id: 29, name: "MiTemplate", category: "Bibliotecas", description: "MiTemplate permite separar a lógica de programação da estrutura visual.", link: "https://github.com/mugomes/mitemplate" },
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
