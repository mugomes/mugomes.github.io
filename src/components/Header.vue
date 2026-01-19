<template>
  <header class="fixed w-full bg-white shadow z-50">
    <nav class="max-w-7xl mx-auto flex items-center justify-between p-4">

      <h1 class="text-xl font-bold"><a href="/">Murilo Gomes</a></h1>

      <!-- Botão hamburguer: SOMENTE mobile -->
      <button
        class="md:hidden text-2xl"
        @click="open = !open"
        aria-label="Menu"
      >
        ☰
      </button>

      <!-- Menu DESKTOP -->
      <ul class="hidden md:flex gap-6 font-medium">
        <li><a href="/#sobre">Sobre</a></li>
        <li><a href="/#servicos">Serviços</a></li>
        <li><a href="/#portfolio">Portfólio</a></li>
        <li><a href="/#contato">Contato</a></li>
      </ul>

    </nav>

    <!-- Menu MOBILE -->
    <ul
      v-if="open"
      class="md:hidden bg-white shadow px-6 py-4 space-y-4"
    >
      <li><a href="#hero">Início</a></li>
      <li><a href="#sobre">Sobre</a></li>
      <li><a href="#servicos">Serviços</a></li>
      <li><a href="#portfolio">Portfólio</a></li>
      <li><a href="#contato">Contato</a></li>
    </ul>

  </header>
</template>

<script>
export default {
  data() {
    return {
      open: false
    }
  }
}
</script>
