<template>
  <div id="app">
    <Header />
    <Hero />
    <About />
    <Servicos />
    <Produtos />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Hero from '../components/Hero.vue';
import About from '../components/About.vue';
import Servicos from '../components/Servicos.vue';
import Produtos from '../components/Produtos.vue';
import Contact from '../components/Contact.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    About,
    Servicos,
    Produtos,
    Contact,
    Footer
  }
}
</script>
