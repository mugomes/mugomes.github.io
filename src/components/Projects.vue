<template>
  <section id="projects" class="projects py-5">
    <div class="container">
      <h2 class="text-center mb-4">Meus Projetos</h2>
      <div class="row">
        <div class="col-md-4" v-for="(project, index) in projects" :key="index">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text">{{ project.description }}</p>
              <a :href="project.page" :target="project.target" class="btn btn-primary">{{project.btn}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          title: 'MiPhant',
          description: 'Desenvolva sistemas em PHP para desktop, compatível com Linux (Debian/Ubuntu) e Windows',
          page: 'https://github.com/mugomes/miphant',
          target: '_blank',
          btn: 'Ver no GitHub'
        },
        {
          title: 'MiPhantDB',
          description: 'Crie tabelas e consulte, adicione, altere e remova registros do banco de dados MySQL/MariaDB.',
          page: 'https://github.com/mugomes/miphantdb',
          target: '_blank',
          btn: 'Ver no GitHub'
        },
        {
          title: 'Mais Projetos',
          description: 'Veja todos os projetos que já desenvolvi em PHP para web e desktop no catálogo.',
          page: '/catalogo.html',
          target: '_self',
          btn: 'Ver Catálogo'
        }
      ]
    }
  }
}
</script>

<style scoped>
.projects .card {
  margin-bottom: 20px;
}
</style>
