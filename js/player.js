class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score =null;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count,
            finishedPlayers:0
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }
    getfinishedPlayers(){
       database.ref('finishedPlayers').on("value",(data)=>{
           this.score=data.val();
       })
    }

    updatefinishedPlayers(){
        database.ref('/').update({
          finishedPlayers:this.score
        })
      }
}
