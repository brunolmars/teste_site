<template>
  <header class="header flex space">
    <div class="flex-1 inline-block">
      <h1 class="header_name">de.games</h1>
      JOGOS DO MES
    </div>

    <RouterLink class="nav_button" to="/">Início</RouterLink>
    <RouterLink class="nav_button" to="/game/register">Registrar Jogo</RouterLink>
    <RouterLink class="nav_button_highlight" to="/about">Entrar</RouterLink>
  </header>

  <div class="body">
    <div class="game-list">
      <div class="game-item">
        <h2>Jogo A</h2>
        <p>Avaliação: 4.5/5</p>
        <p>Valor: R$ 199,00</p>
      </div>

      <div class="game-item">
        <h2>Jogo B</h2>
        <p>Avaliação: 3.9/5</p>
        <p>Valor: R$ 149,00</p>
      </div>

      <div class="game-item">
        <h2>Jogo C</h2>
        <p>Avaliação: 4.8/5</p>
        <p>Valor: R$ 249,00</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
header {
  background-color: black;
  padding: 20px;
}

.header_name {
  font-size: 20px;
  font-weight: bold;
  color: orange;
}

.nav_button {
  padding: 10px;
  margin: 10px;
  border-radius: 12px;
}

.nav_button_highlight {
  padding: 10px;
  margin: 10px;
  border-radius: 12px;
  color: white;
  background-color: orange;
}

.body {
  padding: 20px;
}

.game-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.game-item {
  background-color: #f2f2f2;
  padding: 15px;
  border-radius: 8px;
}

.game-item h2 {
  font-size: 18px;
  margin-bottom: 8px;
}

.game-item p {
  margin: 5px 0;
}
</style>
