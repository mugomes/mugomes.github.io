<template>
  <section id="contact" class="contact py-5">
    <div class="container text-center">
      <h2 class="mb-4">Entre em Contato</h2>
      <p class="lead">Estou disponível para projetos e colaborações!</p>
      
      <div class="contact-info">
        <div class="mb-3">
          <i class="bi bi-whatsapp" style="font-size: 2rem; color: #25d366;"></i>
          <p><a href="https://wa.me/message/UMNU6ZWOIWGYD1" target="_blank" class="btn btn-success btn-lg">Enviar mensagem no WhatsApp</a></p>
        </div>
        
        <div class="mb-3">
          <i class="bi bi-envelope" style="font-size: 2rem; color: #007bff;"></i>
          <p><a href="mailto:mugomesoficial@gmail.com" class="btn btn-primary btn-lg">Enviar e-mail</a></p>
        </div>

        <div class="social-links">
          <p class="mt-4">Você também pode me encontrar nas redes sociais:</p>
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="https://youtube.com/@mugomesoficial" target="_blank" class="btn btn-danger btn-lg">
                <i class="bi bi-youtube"></i> YouTube
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://twitch.tv/profmu" target="_blank" class="btn btn-primary btn-lg">
                <i class="bi bi-twitch"></i> Twitch
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://github.com/mugomes" target="_blank" class="btn btn-dark btn-lg">
                <i class="bi bi-github"></i> GitHub
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://linkedin.com/in/mugomes" target="_blank" class="btn btn-info btn-linkedin btn-lg">
                <i class="bi bi-linkedin"></i> LinkedIn
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://instagram.com/mugomesoficial" target="_blank" class="btn btn-pink btn-lg">
                <i class="bi bi-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
.contact-info i {
  margin-bottom: 10px;
}
.contact-info p {
  font-size: 1.2rem;
  font-weight: 500;
}
.social-links .btn {
  margin: 0.5rem;
  font-size: 1rem;
  text-transform: uppercase;
}

.social-links .btn i {
  margin-right: 0.5rem;
}

.social-links {
  margin-top: 20px;
}

.btn-pink {
  background-color: #E1306C;
  color: #FFFFFF;
}

.btn-pink:hover {
  background-color: #E4437C;
  color: #FFFFFF;
}
</style>
