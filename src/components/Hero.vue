<template>
  <section id="home" class="hero bg-primary text-white text-center py-5">
    <div class="container">
      <h1 class="display-4 fade-in">Murilo Gomes</h1>
      <p class="lead fade-in">Desenvolvedor Back-end</p>
      <div class="mt-4">
        <button class="btn btn-light btn-lg" @click="goToProjects">Ver Projetos</button>
        <button class="btn btn-outline-light btn-lg ms-2" @click="goToContato">Fale Comigo</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  methods: {
    goToProjects() {
      window.location.href = '/projetos.html';
    },
    goToContato() {
      window.location.assign('/#contact');
    }
  }
}
</script>

<style scoped>
.hero {
  margin-top: -32px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
