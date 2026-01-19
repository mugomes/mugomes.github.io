<template>
  <section id="contato" class="py-24 bg-gray-50">
    <div class="max-w-3xl mx-auto px-6 text-center">
      <h3 class="text-3xl font-bold mb-8">Entre em Contato</h3>
      <p class="mb-8 text-lg text-gray-700">Estou disponível para projetos e colaborações! Escolha uma das formas abaixo:</p>

      <div class="space-y-6">
        <!-- WhatsApp -->
        <div>
          <i class="bi bi-whatsapp text-3xl text-green-500 mb-2"></i>
          <p>
            <a href="https://wa.me/message/UMNU6ZWOIWGYD1" target="_blank"
               class="inline-block bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition">
              Enviar mensagem no WhatsApp
            </a>
          </p>
        </div>

        <!-- E-mail -->
        <div>
          <i class="bi bi-envelope text-3xl text-blue-600 mb-2"></i>
          <p>
            <a href="mailto:mugomesoficial@gmail.com"
               class="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
              Enviar e-mail
            </a>
          </p>
        </div>

        <!-- Redes sociais -->
        <div class="mt-8">
          <p class="mb-4 text-gray-700 font-medium">Você também pode me encontrar nas redes sociais:</p>
          <div class="flex flex-wrap justify-center gap-4">
            <a href="https://youtube.com/@mugomesoficial" target="_blank"
               class="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-red-700 transition">
              <i class="bi bi-youtube"></i> YouTube
            </a>

            <a href="https://twitch.tv/profmu" target="_blank"
               class="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-600 transition">
              <i class="bi bi-twitch"></i> Twitch
            </a>

            <a href="https://github.com/mugomes" target="_blank"
               class="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-xl font-semibold hover:bg-gray-900 transition">
              <i class="bi bi-github"></i> GitHub
            </a>

            <a href="https://linkedin.com/in/mugomes" target="_blank"
               class="inline-flex items-center gap-2 bg-blue-400 text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-500 transition">
              <i class="bi bi-linkedin"></i> LinkedIn
            </a>

            <a href="https://instagram.com/mugomesoficial" target="_blank"
               class="inline-flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-xl font-semibold hover:bg-pink-600 transition">
              <i class="bi bi-instagram"></i> Instagram
            </a>
          </div>
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
/* Se quiser, pode adicionar um pequeno espaçamento entre ícones e textos */
i {
  display: block;
  margin: 0 auto 0.5rem auto;
}
</style>
