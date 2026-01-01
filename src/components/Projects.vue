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
          title: 'MiCheckHash',
          description: 'MiCheckHash is a software for checking and generating file hashes.',
          page: 'https://github.com/mugomes/micheckhash',
          target: '_blank',
          btn: 'Ver no GitHub'
        },
        {
          title: 'MiAntivirus',
          description: 'MiAntivirus is a graphical interface for ClamAV that allows you to scan your computer for viruses and easily update the virus definition database through a user-friendly interface.',
          page: 'https://github.com/mugomes/miantivirus',
          target: '_blank',
          btn: 'Ver no GitHub'
        },
        {
          title: 'MiRemovePendrive',
          description: 'Remove pendrive safely.',
          page: 'https://github.com/mugomes/miremovependrive',
          target: '_blank',
          btn: 'Ver no GitHub'
        },
        {
          title: 'MGMicServer',
          description: 'Com MGMicServer você pode usar o microfone do seu computador principal e enviar o áudio sem ruído e chiados para o seu computador secundário.',
          page: 'https://github.com/mugomes/mgmicserver',
          target: '_blank',
          btn: 'Ver no GitHub'
        },
        {
          title: 'MGTOON',
          description: 'Com MGTOON você pode trabalhar com toon (Token-Oriented Object Notation) no PHP, além de criar e ler arquivos toon, você também pode definir chave primária para uma coluna.',
          page: 'https://github.com/mugomes/mgtoon',
          target: '_blank',
          btn: 'Ver no GitHub'
        },
        {
          title: 'Mais Projetos',
          description: 'Veja todos os projetos no Catálogo de Projetos.',
          page: '/projetos.html',
          target: '_self',
          btn: 'Ver Projetos'
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
