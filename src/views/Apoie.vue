<template>
    <div class="app">
        <Header />
        <div class="container mt-5">
            <div class="apoie">
                <p class="apoie-titulo">Apoie os Projetos</p>
                <p class="apoie-description">Sua contribuição ajuda a manter os projetos que
                    desenvolvo funcionando a todo vapor.</p>
                <!-- Cartões de Apoio -->
                <div class="cartoes">
                    <!-- GitHub Sponsors -->
                    <div class="cartao-1">
                        <h3 class="cartao-1-titulo">GitHub Sponsors</h3>
                        <p class="cartao-1-descricao">Apoie e ajude a manter os projetos a todo vapor.</p>
                        <a href="https://github.com/sponsors/mugomes" target="_blank" rel="nofollow noopener"
                            class="btn btn-primary">Apoiar Agora</a>
                    </div>
                    <!-- Asaas Mensal (destaque) -->
                    <div class="cartao-2">
                        <h3 class="cartao-2-titulo">Apoio Mensal - Asaas</h3>
                        <p class="cartao-2-descricao">Apoie mensalmente e ajude a manter os
                            projetos a todo vapor.</p>
                        <a href="https://www.asaas.com/c/0f9eydhmgg8e3mrj" target="_blank" rel="nofollow noopener"
                            class="btn btn-primary">Apoiar
                            Mensalmente</a>
                    </div>
                    <!-- Asaas Único -->
                    <div class="cartao-2">
                        <h3 class="cartao-2-titulo">Apoie com Asaas</h3>
                        <p class="cartao-2-descricao">Contribua utilizando cartão, boleto ou PIX.
                            Uma ajuda pontual já faz diferença!</p>
                        <a href="https://www.asaas.com/c/girp15xsowg4dpvf" target="_blank" rel="nofollow noopener"
                            class="btn btn-primary">Apoiar Agora</a>
                    </div>
                    <!-- Stripe -->
                    <div class="cartao-2">
                        <h3 class="cartao-2-titulo">Apoie com Stripe</h3>
                        <p class="cartao-2-descricao">Contribua utilizando cartão de crédito ou
                            boleto bancário.</p>
                        <a href="https://donate.stripe.com/14kdSugShfxs9by6oo" target="_blank" rel="nofollow noopener"
                            class="btn btn-primary">Apoiar
                            Agora</a>
                    </div>
                    <!-- Livepix -->
                    <div class="cartao-2">
                        <h3 class="cartao-2-titulo">Apoie com LivePix</h3>
                        <p class="cartao-2-descricao">Faça seu apoio durante a live e sua
                            mensagem será exibida e lida por um robô em tempo real.</p>
                        <a href="https://livepix.gg/profmu" target="_blank" rel="nofollow noopener"
                            class="btn btn-primary">Apoiar com LivePix</a>
                    </div>
                </div>
                <!-- Mensagem de agradecimento -->
                <p class="agradecimento-1">Agradeço imensamente pelo seu apoio! Cada contribuição
                    ajuda a produzir mais conteúdo de qualidade.</p>
                <p class="agradecimento-2">Qualquer apoio financeiro é voluntário e não é reembolsável.</p>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

import { ref, computed } from "vue";

export default {
    name: "Apoie",
    components: {
        Header,
        Footer
    }
};
</script>

<style scoped>
.apoie {
    background-color: #f9f9f9;
    font-family: Arial, sans-serif;
    padding: 40px 20px;
    text-align: center;
}

.apoie-titulo {
    font-size: 32px;
    font-weight: bold;
    color: #0078d4;
    margin-bottom: 10px;
}

.apoie-description {
    font-size: 18px;
    color: #000000;
    margin-bottom: 5px;
}

.cartoes {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.cartao-asaas {
    background-color: #e6f2ff;
    border-radius: 12px;
    border: 1px solid #0078d4;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    max-width: 300px;
    padding: 25px;
    text-align: center
}

.cartao-asaas-titulo {
    color: #0078d4;
    margin-bottom: 15px;
}

.cartao-1 {
    background-color: #e6f2ff;
    border-radius: 12px;
    border: 1px solid #0078d4;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    max-width: 300px;
    padding: 25px;
    text-align: center;
}

.cartao-1-titulo {
    color: #0078d4;
    margin-bottom: 15px;
}

.cartao-1-descricao {
    font-size: 16px;
    color: #444444;
    margin-bottom: 20px;
}

.cartao-2 {
    background-color: #ffffff;
    border-radius: 12px;
    border: 1px solid #ddd;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    padding: 25px;
    text-align: center;
}

.cartao-2-titulo {
    color: #444444;
    margin-bottom: 15px;
}

.cartao-2-descricao {
    font-size: 16px;
    color: #666666;
    margin-bottom: 20px;
}

.agradecimento-1 {
    font-size: 16px;
    margin-top: 40px;
    color: #666666;
}

.agradecimento-2 {
    font-size: 14px;
    color: #999999;
}
</style>
