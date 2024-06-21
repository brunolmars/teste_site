Vue.component('game-list', {
    props: ['games'],
    template: `
        <div class="games">
            <game-item v-for="(game, index) in games" :key="index" :game="game"></game-item>
        </div>
    `
});

Vue.component('game-item', {
    props: ['game'],
    template: `
        <a :href="'#'" class="game-link" @click="openGame(game.nome)">
            {{ game.nome }}
        </a>
    `,


new Vue({
    el: '#app',
    data: {
        games: [
            { nome: 'Jogo 1', descricao: 'Descrição do Jogo 1', preco: 'R$ 50,00', nota: 4.5 },
            { nome: 'Jogo 2', descricao: 'Descrição do Jogo 2', preco: 'R$ 40,00', nota: 4.2 },
            { nome: 'Jogo 3', descricao: 'Descrição do Jogo 3', preco: 'R$ 60,00', nota: 4.8 }
        ]
    }
});
