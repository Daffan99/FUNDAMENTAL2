class ShootingGame {
    constructor(player1, player2) {
      this.player1 = player1;
      this.player2 = player2;
    }
  
    getRandomItem() {
      const randomHealth = Math.random() < 0.5 ? 0 : 10;
      const randomPower = Math.random() < 0.5 ? 0 : 10;
      return { health: randomHealth, power: randomPower };
    }
  
    start() {
      let currentPlayer = this.player1;
      let nextPlayer = this.player2;
  
      while (currentPlayer.health > 0 && nextPlayer.health > 0) {
        console.log("Status pemain sebelum menembak:");
        console.log(`${this.player1.showStatus()} | ${this.player2.showStatus()}`);
  
        const currentItem = this.getRandomItem();
        console.log(`Pemain ${currentPlayer.name} mendapatkan item: ${JSON.stringify(currentItem)}`);
        currentPlayer.useItem(currentItem);
  
        console.log(`Pemain ${currentPlayer.name} menembak pemain ${nextPlayer.name}`);
        nextPlayer.hit(currentPlayer.power);
  
        console.log("Status pemain setelah menembak:");
        console.log(`${this.player1.showStatus()} | ${this.player2.showStatus()}`);
  
        // swap players for next turn
        const temp = currentPlayer;
        currentPlayer = nextPlayer;
        nextPlayer = temp;
      }
  
      // determine winner
      const winner = this.player1.health > 0 ? this.player1 : this.player2;
      console.log(`Pemenangnya adalah ${winner.name}!`);
    }
  }
  
  class Player 
    constructor(name, health = 100, power = 10) {
      this.name = name;
      this.health = health;
      this.power = power;
    }
  
    hit(power) 
      this.health -= power;
      console.log(`Pemain ${this.name} terkena tembakan dan memiliki kesehatan sekarang ${this.health}`);
    }
  
    useItem(item) {
      if (item.health > 0) {
        this.health += item.health;
        console.log(`Pemain ${this.name} menggunakan item kesehatan dan sekarang memiliki kesehatan ${this.health}`);
      } else if (item.power > 0) {
        this.power += item.power;
        console.log(`Pemain ${this.name} menggunakan item daya dan sekarang memiliki daya ${this.power}`);
      }
    }
  
    showStatus() {
      return `P
  