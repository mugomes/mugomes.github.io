<template>
  <section class="relative min-h-[90vh] flex items-center justify-center bg-[#020617] text-slate-50 overflow-hidden">

    <!-- Glows -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <!-- Glow azul -->
      <div
        class="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-indigo-400/20 via-indigo-500/10 to-transparent blur-3xl animate-[float_25s_ease-in-out_infinite]">
      </div>
      <!-- Glow roxo -->
      <div
        class="absolute bottom-[-15%] left-[-5%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-purple-500/15 via-purple-400/10 to-transparent blur-3xl animate-[float_30s_ease-in-out_infinite_reverse]">
      </div>

      <!-- Noise Overlay -->
      <div
        class="absolute inset-0 opacity-5 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]">
      </div>
    </div>

    <!-- Conteúdo -->
    <div class="relative z-10 w-full max-w-5xl px-6 py-30 text-center translate-y-9">
      <header class="space-y-8">
        <div
          class="inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4 py-1.5 text-sm font-medium tracking-wider text-indigo-400 uppercase animate-pulse">
          Manutenção de Sistemas
        </div>

        <h1 class="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mt-4">
          Sistemas rápidos,<br />
          <span
            class="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 animate-bounce-slow">
            estáveis e confiáveis.
          </span>
        </h1>

        <p class="mx-auto max-w-xl text-lg sm:text-xl text-slate-400 font-light leading-relaxed mt-6">
          Corrijo falhas, acelero processos e garanto que seu sistema funcione com máxima performance, poupando tempo e
          dinheiro.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-5 pt-8">
          <!-- CTA Principal -->
          <button @click="goToContact"
            class="group relative flex h-14 items-center justify-center rounded-full bg-indigo-600 px-10 font-bold text-white shadow-lg transition-all hover:bg-indigo-700 hover:scale-105">
            Solicitar Otimização
            <span class="absolute right-4 animate-bounce">→</span>
          </button>

          <!-- CTA Secundário -->
          <button @click="goToServices"
            class="flex h-14 items-center justify-center rounded-full border border-indigo-600 bg-transparent px-10 font-bold text-indigo-600 transition-all hover:bg-indigo-600 hover:text-white hover:scale-105">
            Ver Serviços
          </button>
        </div>

      </header>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  methods: {
    goToContact() {
      window.location.href = '/#contato';
    },
    goToServices() {
      window.location.assign('/#servicos');
    }
  }
}
</script>

<style scoped>
/* Animação de float usando apenas keyframes CSS, aplicável via Tailwind arbitrary class */
@keyframes float {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.8;
  }

  25% {
    transform: translate(3%, 2%) scale(1.05);
    opacity: 1;
  }

  50% {
    transform: translate(-2%, 3%) scale(0.95);
    opacity: 0.7;
  }

  75% {
    transform: translate(2%, -1%) scale(1.02);
    opacity: 0.85;
  }
}

/* Animação lenta do span do título */
@keyframes bounce-slow {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }
}

.animate-[float_25s_ease-in-out_infinite] {
  animation: float 25s ease-in-out infinite;
}

.animate-[float_30s_ease-in-out_infinite_reverse] {
  animation: float 30s ease-in-out infinite reverse;
}

.animate-bounce-slow {
  animation: bounce-slow 6s ease-in-out infinite;
}
</style>
