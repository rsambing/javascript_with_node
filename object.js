//objects

const player = {
    nickname : "sambinga",
    health : 20,
    isDead: false,
    present()
    {
        console.log("my name is "+this.nickname);
    },
    items: {
        nome: "knife",
        size: "20"
    }
}

player.name = "reinaldo";

for (const prop in player)
{
    console.log(prop);
}

player.present();
console.log(player.items.nome);
