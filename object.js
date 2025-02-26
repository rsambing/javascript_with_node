//objects

const player = {
    nickname : "sambinga",
    health : 20,
    isDead: false,
    present()
    {
        console.log("my name is "+this.nickname);
    }
}

player.name = "reinaldo";

for (const prop in player)
{
    console.log(prop);
}

player.present();
