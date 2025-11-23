<template>
  <div class="app">
    <Header />
    <div class="container mt-5">
      <section class="servicos-wp">
        <h1 class="titulo">Aulas de PHP e WordPress</h1>
        <p class="descricao">
          Aprenda PHP e WordPress do zero ao avançado, com aulas práticas,
          mentoria personalizada e consultoria técnica para projetos.
        </p>

        <div class="cards-servicos">
          <div class="card">
            <h3>Aula Particular PHP</h3>
            <p>Aprenda programação com PHP, boas práticas e desenvolvimento moderno.</p>
            <ul>
              <li>Lógica e fundamentos</li>
              <li>POO e MVC</li>
              <li>APIs e integração</li>
              <li>Projetos práticos</li>
            </ul>
            <a href="#contato" class="btn-contato">Solicitar Aula</a>
          </div>

          <div class="card destaque">
            <h3>Aula Particular WordPress</h3>
            <p>Domine o WordPress para criar temas, plugins e gerenciar sites com segurança.</p>
            <ul>
              <li>Criação de temas</li>
              <li>Criação de plugins</li>
              <li>WooCommerce</li>
              <li>Segurança e desempenho</li>
            </ul>
            <a href="#contato" class="btn-contato">Solicitar Aula</a>
          </div>

          <div class="card">
            <h3>Mentoria Técnica</h3>
            <p>Acompanhamento semanal ou mensal para evolução acelerada.</p>
            <ul>
              <li>Correção de códigos</li>
              <li>Apoio em projetos</li>
              <li>Planejamento de carreira</li>
              <li>Melhores práticas profissionais</li>
            </ul>
            <a href="#contato" class="btn-contato">Agendar Mentoria</a>
          </div>
        </div>

        <div class="cards-servicos mt-3">
          <div class="card">
            <h3>Consultoria Wordpress/PHP</h3>
            <p>Ideal para quem precisa resolver problemas em projetos, otimizar sites ou implementar recursos avançados.</p>
            <a href="#contato" class="btn-contato">Solicitar Consultoria</a>
          </div>
        </div>
      </section>

      <section id="contato" class="contato">
        <h2 class="titulo">Solicitar Aula ou Consultoria</h2>
        <p>Entre em contato e receba instruções ou orçamento personalizado.</p>
        <a href="https://wa.me/5519986093333" target="_blank" class="btn-contato">Falar pelo WhatsApp</a>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'ServicosWordPress',
  components: { Header, Footer }
};
</script>

<style scoped>
.servicos-wp, .portfolio, .contato {
  padding: 40px 20px;
  text-align: center;
}

.titulo {
  font-size: 32px;
  font-weight: bold;
  color: #0078d4;
  margin-bottom: 10px;
}

.descricao {
  font-size: 18px;
  color: #333;
  margin-bottom: 30px;
}

.cards-servicos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.card {
  background: #fff;
  border-radius: 12px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  max-width: 300px;
  padding: 25px;
  text-align: left;
}

.card.destaque {
  border: 2px solid #0078d4;
  background: #f0f8ff;
}

.card h3 {
  color: #0078d4;
  margin-bottom: 15px;
}

.card ul {
  padding-left: 20px;
  margin-bottom: 20px;
}

.btn-contato {
  display: inline-block;
  background: #0078d4;
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
}

.contato .btn-contato {
  font-size: 18px;
  margin-top: 20px;
}
</style>
