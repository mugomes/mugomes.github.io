<template>
  <section id="home" class="hero bg-primary text-white text-center py-5">
    <div class="container">
      <h1 class="display-4 fade-in">Olá, eu sou Murilo Gomes</h1>
      <p class="lead fade-in">Especialista em PHP</p>
      <div class="mt-4">
        <button class="btn btn-light btn-lg" @click="goToProjects">Ver Projetos</button>
        <button class="btn btn-outline-light btn-lg ms-2" @click="goToContact">Contato</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  methods: {
    goToProjects() {
      window.location.href = '#projects';
    },
    goToContact() {
      window.location.href = '#contact';
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
