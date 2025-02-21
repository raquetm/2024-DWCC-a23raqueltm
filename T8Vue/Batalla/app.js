// Batalla. Descarga o código base e realiza as modificacións propostas usando Vue.
// Recoméndase que a lóxica da aplicación vaia no ficheiro JavaScript e non no HTML:
//      a. Tanto a vida do monstro como a da persoa que xoga terá valores entre 0 -
//      100. É dicir, o valor de vida non pode ser un número negativo nin superar o
//      valor 100. Debe comprobarse en todo momento que está no rango permitido.
//      Para visualizalo de forma gráfica establecerase o valor correspondente na
//      propiedade width de CSS no <div class=”healthbar__value”>.

//      b. Cada vez que se pulsa o botón “Ataque” a vida do monstro diminúe, pero ao
//      mesmo tempo este contraataca e a vida da persoa que está xogando tamén
//      diminuirá. Para que o xogo non sexa preditivo, a vida do monstro diminuirá
//      nun valor aleatorio entre 5 e 12 e a vida da persoa que xoga diminuirá nun
//      valor aleatorio entre 8 e 15.

//      c. Cada vez que se pulsa o botón “Ataque especial” a vida do monstro diminúe
//      un número aleatorio entre 10 e 25. Igual que no caso anterior, o monstro
//      contraataca e a vida da persoa que está xogando tamén diminuirá un número
//      aleatorio entre 8 e 15 (igual que antes).

//      d. Cada vez que se pulsa un dos botóns “Ataque”, “Ataque especial” ou
//      “Curación” realízase unha acción no xogo. Fai que o botón “Ataque
//      especial” só estea habilitado unha vez de cada 3 accións realizadas.

//      e. Ao pulsar o botón “Curación” a vida da persoa que xoga verase
//      incrementada nun valor aleatorio entre 8 e 20 (hai que ter en conta de non
//      superar o límite de 100). Ademais, cada vez que se use este botón, a vida da
//      persoa que xoga tamén se verá diminuída nun número aleatorio entre 8 e 15
//      (como se sufrise un ataque).

//      f. Comprobación de fin de partida. Cando a vida do monstro ou da persoa
//      xogadora chegue a 0, a partida remata. Comproba cando suceda isto e
//      mostra no navegador información de que a partida rematou e quen ganou: o
//      monstro, a persoa xogadora ou produciuse un empate.

//      g. Cando a partida remate debe mostrarse un botón “Novo xogo” para poder
//      iniciar unha nova partida. Este botón non estará visible cando unha partida
//      estea activa.

//      h. Cando se pulsa o botón “Renderse” significa que a persoa que está xogando
//      se rende, polo que a partida remata. Non hai que modificar o estado das
//      vidas nin do monstro nin da persoa que xoga.

//      i. Cando a partida remata, deben ocultarse os botóns “Ataque”, “Ataque
//      especial”, “Curación” e “Renderse”.

//      j. Mostra, a modo de rexistro, as accións realizadas na partida. A última acción
//      realizada debe ser a primeira que apareza. Utiliza as clases CSS definidas
//      para os estilos: log--player, log--monster, log--heal (curación) e
//      log--damage (ataque). Na imaxe, tanto o ataque como o ataque especial non
//      están diferenciados. 

const { createApp } = Vue;

createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      specialAttackCounter: 0,
      gameOver: false,
      winner: null,
      logs: []
    };
  },
  computed: {
    playerHealthStyle() {
      return { width: this.playerHealth + '%' };
    },
    monsterHealthStyle() {
      return { width: this.monsterHealth + '%' };
    },
    specialAttackDisabled() {
      return this.specialAttackCounter % 3 !== 0;
    }
  },
  methods: {
    attack() {
      this.playerAction(this.getRandomValue(5, 12), 'player', 'monster');
      this.monsterAction();
      this.specialAttackCounter++;
    },
    specialAttack() {
      this.playerAction(this.getRandomValue(10, 25), 'player', 'monster');
      this.monsterAction();
      this.specialAttackCounter++;
    },
    heal() {
      const healValue = this.getRandomValue(8, 20);
      this.playerHealth = Math.min(this.playerHealth + healValue, 100);
      this.addLog('player', 'heal', healValue);
      this.monsterAction();
      this.specialAttackCounter++;
    },
    surrender() {
      this.gameOver = true;
      this.winner = 'monster';
    },
    newGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.specialAttackCounter = 0;
      this.gameOver = false;
      this.winner = null;
      this.logs = [];
    },
    playerAction(value, attacker, target) {
      this[target + 'Health'] = Math.max(this[target + 'Health'] - value, 0);
      this.addLog(attacker, 'damage', value);
    },
    monsterAction() {
      const damage = this.getRandomValue(8, 15);
      this.playerHealth = Math.max(this.playerHealth - damage, 0);
      this.addLog('monster', 'damage', damage);
    },
    getRandomValue(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    addLog(who, what, value) {
      this.logs.unshift({ who, what, value });
    }
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = 'draw';
        this.gameOver = true;
      } else if (value <= 0) {
        this.winner = 'monster';
        this.gameOver = true;
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = 'draw';
        this.gameOver = true;
      } else if (value <= 0) {
        this.winner = 'player';
        this.gameOver = true;
      }
    }
  }
}).mount('#game');